import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation, useOutletContext, useParams } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLazyFetchServicesQuery,
} from '@api/servicesApi';

import {
  useLazyFetchStationsQuery,
} from '@api/stationsApi';

import {
  SERVICE_GROUP_CORE,
} from '@constants/serviceGroups';

import {
  THEME_AUTO,
} from '@constants/theme';

import {
  TIMING_CONSTANT,
} from '@constants/time';

import {
  VIEW_TYPE_SERVICE,
  VIEW_TYPE_SERVICES,
  VIEW_TYPE_STATION,
} from '@constants/viewTypes';

import {
  setHighContrastModeEnabled,
  setMapVisibilityInterchanges,
  setMapVisibilityStepFreeAccess,
  setPinned,
  setThemeApp,
} from '@stores/storeSliceSettings';

import {
  setMenuOpen,
  setPageHeaderHeight,
  setPageMainHeight,
  setPageMainScrollTop,
  setSettingsOpen,
} from '@stores/storeSliceState';

import ViewErrorGeneric from '@views/ViewErrorGeneric';

import Loading from '@components/Loading';
import LoadingSpinner from '@components/LoadingSpinner';
import Menu from '@components/Menu';
import PageAside from '@components/PageAside';
import PageFooter from '@components/PageFooter';
import PageHeader from '@components/PageHeader';
import PullToRefreshMessage from '@components/PullToRefreshMessage';
import Settings from '@components/Settings';

function Layout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const refPageHeader = useRef();
  const refPageMain = useRef();

  const {
    highContrastModeEnabled,
    mapVisibilityInterchanges,
    mapVisibilityStepFreeAccess,
    pinned,
    themeApp,
    themeSystem,
  } = useSelector((state) => state.settings);

  const {
    globalLoading,
    menuOpen,
    settingsOpen,
    viewMode,
    viewType,
  } = useSelector((state) => state.state);

  const [ fetchServicesTrigger ] = useLazyFetchServicesQuery();
  const [ fetchStationsTrigger ] = useLazyFetchStationsQuery();

  const scrollTo = (top) => {
    refPageMain.current.scrollTo({
      behavior: 'instant',
      top,
    });
  };

  const setRefPageHeaderHeight = () => {
    const refPageHeaderHeight = refPageHeader.current?.clientHeight;
    dispatch(setPageHeaderHeight(refPageHeaderHeight));
  };

  const setRefPageMainHeight = () => {
    const refPageMainHeight = refPageMain.current?.clientHeight;
    dispatch(setPageMainHeight(refPageMainHeight));
  };

  const setRefPageMainScrollTop = () => {
    const refPageMainScrollTop = refPageMain.current?.scrollTop;
    dispatch(setPageMainScrollTop(refPageMainScrollTop));
  };

  const setRefPageMeasurements = () => {
    setRefPageHeaderHeight();
    setRefPageMainHeight();
    setRefPageMainScrollTop();
  };

  useEffect(() => {
    setTimeout(() => {
      setRefPageMeasurements();
    }, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (refPageMain.current) {
        refPageMain.current.addEventListener('scroll', setRefPageMainScrollTop);
        window.addEventListener('resize', setRefPageMeasurements);

        return function cleanup() {
          refPageMain.current.removeEventListener('scroll', setRefPageMainScrollTop);
          window.removeEventListener('resize', setRefPageMeasurements);
        };
      }
    }, 0);
  }, []);

  const isServicePage = () => viewType === VIEW_TYPE_SERVICE;
  const isServicesPage = () => viewType === VIEW_TYPE_SERVICES;
  const isStationPage = () => viewType === VIEW_TYPE_STATION;

  const containerClasses = () => {
    const output = [ 'container' ];
    if (isServicePage()) output.push('container--pb container--px');
    else if (isServicesPage()) output.push('container--px h-100');
    else output.push('container--px container--py');
    return output.join(' ');
  };

  const pageClasses = () => {
    const output = [ 'page' ];
    if (highContrastModeEnabled) output.push('page--high-contrast-mode-enabled');
    if (globalLoading) output.push('page--loading');
    output.push('h-100');
    return output.join(' ');
  };

  useEffect(() => {
    const highContrastModeEnabled = localStorage.getItem('highContrastModeEnabled') === 'true' || matchMedia('(forced-colors: active)').matches;
    if (highContrastModeEnabled) dispatch(setHighContrastModeEnabled(highContrastModeEnabled));
  }, []);

  useEffect(() => {
    const pinned = localStorage.getItem('pinned');
    if (pinned) dispatch(setPinned(JSON.parse(pinned)));
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) dispatch(setThemeApp(theme));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('highContrastModeEnabled', highContrastModeEnabled);
    }, 0);
  }, [ highContrastModeEnabled ]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('pinned', JSON.stringify(pinned));
    }, 0);
  }, [ pinned ]);

  useEffect(() => {
    setTimeout(() => {
      const theme = themeApp === THEME_AUTO ? themeSystem : themeApp;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', themeApp);
    }, 0);
  }, [ themeApp ]);

  useEffect(() => {
    const mapVisibilityInterchanges = localStorage.getItem('mapVisibilityInterchanges');
    if (mapVisibilityInterchanges) {
      dispatch(setMapVisibilityInterchanges(JSON.parse(mapVisibilityInterchanges)));
    } else {
      dispatch(setMapVisibilityInterchanges({
        [SERVICE_GROUP_CORE]: true,
      }));
    }
  }, []);

  useEffect(() => {
    const mapVisibilityStepFreeAccess = localStorage.getItem('mapVisibilityStepFreeAccess');
    if (mapVisibilityStepFreeAccess === 'true') {
      dispatch(setMapVisibilityStepFreeAccess(true));
    } else {
      dispatch(setMapVisibilityStepFreeAccess(false));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('mapVisibilityInterchanges', JSON.stringify(mapVisibilityInterchanges));
    }, 0);
  }, [ mapVisibilityInterchanges ]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('mapVisibilityStepFreeAccess', mapVisibilityStepFreeAccess);
    }, 0);
  }, [ mapVisibilityStepFreeAccess ]);

  useEffect(() => {
    dispatch(setMenuOpen(false));
    dispatch(setSettingsOpen(false));
    if (refPageMain.current) refPageMain.current.scrollTo(0, 0); // Scroll to top of `.page__main` on every view change
  }, [ location ]);

  const handlePullToRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isServicePage()) {
          fetchServicesTrigger(viewMode);
        }
        if (isServicesPage()) {
          fetchServicesTrigger(viewMode);
        }
        if (isStationPage()) {
          fetchStationsTrigger(id);
        }
        resolve();
      }, TIMING_CONSTANT);
    });
  };

  return (
    <>
      {
        globalLoading && (
          <Loading
            global={true}
          />
        )
      }
      {
        (
          <PullToRefresh
            onRefresh={handlePullToRefresh}
            pullingContent={<PullToRefreshMessage />}
            pullDownThreshold="48"
            refreshingContent={<LoadingSpinner />}
          >
            <div className={pageClasses()}>
              <header
                className="page__header"
                ref={refPageHeader}
              >
                <div className="container container--px">
                  <PageHeader />
                </div>
              </header>
              {
                (!menuOpen && !settingsOpen) && (
                  <main
                    className="page__main"
                    ref={refPageMain}
                  >
                    <div className={containerClasses()}>
                      <ErrorBoundary
                        fallbackRender={ViewErrorGeneric}
                      >
                        <Outlet
                          context={{ scrollTo }}
                        />
                      </ErrorBoundary>
                    </div>
                  </main>
                )
              }
              {
                (menuOpen || settingsOpen) && (
                  <aside className="page__aside">
                    <div className="container container--px container--py">
                      <PageAside>
                        {
                          menuOpen && (<Menu />)
                        }
                        {
                          settingsOpen && (<Settings />)
                        }
                      </PageAside>
                    </div>
                  </aside>
                )
              }
              <footer className="page__footer">
                <div className="container container--px">
                  <PageFooter
                    showBackButton={isServicePage() || isStationPage()}
                  />
                </div>
              </footer>
            </div>
          </PullToRefresh>
        )
      }
    </>
  );
}

export default Layout;

export function useScrollTo() {
  return useOutletContext();
}

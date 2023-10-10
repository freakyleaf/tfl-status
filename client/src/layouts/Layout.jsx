import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PATH_BUS,
  PATH_CORE,
  PATH_NATIONAL_RAIL,
} from '@constants/paths';

import {
  THEME_AUTO,
} from '@constants/theme';

import {
  setMenuOpen,
  setPageMainHeight,
  setPageMainScrollTop,
  setSettingsOpen,
  setThemeApp,
} from '@stores/storeSliceSettings';

import {
  useFetchStatusesQuery,
} from '@api/statusApi';

import ViewErrorGeneric from '@views/ViewErrorGeneric';

import Error from '@components/Error';
import Loading from '@components/Loading';
import LoadingSpinner from '@components/LoadingSpinner';
import NavigationMenu from '@components/NavigationMenu';
import PageAside from '@components/PageAside';
import PageFooter from '@components/PageFooter';
import PageHeader from '@components/PageHeader';
import PullToRefreshMessage from '@components/PullToRefreshMessage';
import Settings from '@components/Settings';

function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const refPageMain = useRef();

  const {
    menuOpen,
    settingsOpen,
    themeApp,
    themeSystem,
  } = useSelector((state) => state.settings);

  const {
    data: services,
    error,
    isLoading,
    refetch,
  } = useFetchStatusesQuery();

  const scrollTo = (top) => {
    refPageMain.current.scrollTo({
      behavior: 'instant',
      top,
    });
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
    setRefPageMainHeight();
    setRefPageMainScrollTop();
  };

  useEffect(() => {
    setRefPageMeasurements();
  }, [ services ]); // Using `services` instead of `refPageMain` as `refPageMain` doesn't calculate the correct value on app init

  useEffect(() => {
    if (refPageMain.current) {
      refPageMain.current.addEventListener('scroll', setRefPageMainScrollTop);
      window.addEventListener('resize', setRefPageMeasurements);

      return function cleanup() {
        refPageMain.current.removeEventListener('scroll', setRefPageMainScrollTop);
        window.removeEventListener('resize', setRefPageMeasurements);
      };
    }
  }, [ services ]); // Using `services` instead of `refPageMain` as `refPageMain` doesn't calculate the correct value on app init

  const pageMainClasses = () => {
    const output = [ 'container' ];
    if ([ `/${PATH_BUS}`, PATH_CORE, `/${PATH_NATIONAL_RAIL}` ].includes(location.pathname)) output.push('container--px');
    else if (location.pathname.includes('service')) output.push('container--pb container--px');
    else output.push('container--px container--py');
    output.push('h-100');
    return output.join(' ');
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) dispatch(setThemeApp(theme));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const theme = themeApp === THEME_AUTO ? themeSystem : themeApp;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', themeApp);
    }, 0);
  }, [ themeApp ]);

  // Close the menu or settings on any route change
  useEffect(() => {
    dispatch(setMenuOpen(false));
    dispatch(setSettingsOpen(false));
  }, [ location ]);

  const handlePullToRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        refetch();
        resolve();
      }, 1000);
    });
  };

  return (
    <>
      {
        isLoading && (
          <Loading />
        )
      }
      {
        error && (
          <Error
            message={error.data.message}
            status={error.status}
          />
        )
      }
      {
        services && (
          <PullToRefresh
            onRefresh={handlePullToRefresh}
            pullingContent={<PullToRefreshMessage />}
            refreshingContent={<LoadingSpinner />}
          >
            <div className="page h-100">
              <header className="page__header">
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
                    <div className={pageMainClasses()}>
                      <ErrorBoundary
                        fallbackRender={ViewErrorGeneric}
                      >
                        <Outlet
                          context={{ scrollTo, services }}
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
                          menuOpen && (
                            <NavigationMenu
                              services={services}
                            />
                          )
                        }
                        {
                          settingsOpen && (
                            <Settings />
                          )
                        }
                      </PageAside>
                    </div>
                  </aside>
                )
              }
              <footer className="page__footer">
                <div className="container container--px">
                  <PageFooter />
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

export function useServices() {
  return useOutletContext();
}

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useOutletContext } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  THEME_AUTO,
} from '@constants/theme';

import {
  setPageMainHeight,
  setPageMainScrollTop,
  setThemeApp,
} from '@stores/storeSliceSettings';

import {
  useFetchStatusesQuery,
} from '@api/statusApi';

import ViewErrorGeneric from '@views/ViewErrorGeneric';

import Error from '@components/Error';
import Loading from '@components/Loading';
import PageAside from '@components/PageAside';
import PageFooter from '@components/PageFooter';
import PageHeader from '@components/PageHeader';
import PullToRefreshMessage from '@components/PullToRefreshMessage';

function Layout() {
  const dispatch = useDispatch();
  const refPageMain = useRef();

  const {
    themeApp,
    themeSystem,
  } = useSelector((state) => state.settings);

  const {
    data: services,
    error,
    isLoading,
    refetch,
  } = useFetchStatusesQuery();

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

  const scrollTo = (top) => {
    refPageMain.current.scrollTo({
      behavior: 'instant',
      top,
    });
  };

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

  const [ menuOpen, setMenuOpen ] = useState(false);

  const classes = () => {
    const output = [ 'page' ];
    if (menuOpen) output.push('page--menu-open');
    output.push('h-100');
    return output.join(' ');
  };

  const handlePullToRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        refetch();
        resolve();
      }, 1000);
    });
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
          >
            <div className={classes()}>
              <header className="page__header">
                <PageHeader
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </header>
              <main
                className="page__main"
                ref={refPageMain}
              >
                <ErrorBoundary
                  fallbackRender={ViewErrorGeneric}
                >
                  <Outlet
                    context={{ scrollTo, services }}
                  />
                </ErrorBoundary>
              </main>
              <aside className="page__aside">
                <PageAside
                  services={services}
                  setMenuOpen={setMenuOpen}
                />
              </aside>
              <footer className="page__footer">
                <PageFooter />
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

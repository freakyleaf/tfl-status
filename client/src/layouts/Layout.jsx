import { Outlet, useOutletContext } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import {
  useFetchStatusesQuery,
} from '@api/statusApi';

import ViewErrorGeneric from '@views/ViewErrorGeneric';

import Error from '@components/Error';
import Loading from '@components/Loading';
import PageAside from '@components/PageAside';
import PageFooter from '@components/PageFooter';
import PageHeader from '@components/PageHeader';

function Layout() {
  const {
    data: services,
    error,
    isLoading,
    refetch,
  } = useFetchStatusesQuery();

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
          >
            <div className={classes()}>
              <header className="page__header">
                <PageHeader
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </header>
              <main className="page__main">
                <ErrorBoundary
                  fallbackRender={ViewErrorGeneric}
                >
                  <Outlet
                    context={{ services }}
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

export function useServices() {
  return useOutletContext();
}

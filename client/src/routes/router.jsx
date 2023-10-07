import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import {
  PATH_BUS,
  PATH_HOME,
  PATH_NATIONAL_RAIL,
} from '@constants/paths';

import {
  serviceModesBus,
  serviceModesCore,
  serviceModesNationalRail,
} from '@constants/serviceModes';

import Layout from '@layouts/Layout';

import ViewErrorPageNotFound from '@views/ViewErrorPageNotFound';
import ViewErrorService from '@views/ViewErrorService';
import ViewServices from '@views/ViewServices';
import ViewService from '@views/ViewService';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      path={PATH_HOME}
    >
      <Route
        element={
          <ViewServices
            pageTitle="Home"
            serviceModes={serviceModesCore}
            viewMode="core"
            viewType="services"
          />}
        index
      />
      <Route
        element={
          <ViewService
            backTo={{
              name: 'Home',
              path: PATH_HOME,
            }}
          />
        }
        errorElement={<ViewErrorService />}
        path="service/:id"
      />
      <Route
        element={
          <ViewServices
            pageTitle="Bus"
            serviceModes={serviceModesBus}
            viewMode="bus"
            viewType="services"
          />}
        path={PATH_BUS}
      />
      <Route
        element={
          <ViewService
            backTo={{
              name: 'all bus services',
              path: `/${PATH_BUS}`,
            }}
          />
        }
        errorElement={<ViewErrorService />}
        path={`${PATH_BUS}/service/:id`}
      />
      <Route
        element={
          <ViewServices
            pageTitle="National Rail"
            serviceModes={serviceModesNationalRail}
            viewMode="national-rail"
            viewType="services"
          />}
        path={PATH_NATIONAL_RAIL}
      />
      <Route
        element={
          <ViewService
            backTo={{
              name: 'all National Rail services',
              path: `/${PATH_NATIONAL_RAIL}`,
            }}
          />
        }
        errorElement={<ViewErrorService />}
        path={`${PATH_NATIONAL_RAIL}/service/:id`}
      />
      <Route
        path='*'
        element={<ViewErrorPageNotFound />}
      />
    </Route>,
  ),
);

export default router;

import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import {
  PATH_BUS,
  PATH_CORE,
  PATH_NATIONAL_RAIL,
} from '@constants/paths';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_NAME_PRETTY_BUS,
  SERVICE_NAME_PRETTY_CORE,
  SERVICE_NAME_PRETTY_NATIONAL_RAIL,
} from '@constants/serviceGroups';

import {
  contentBackToBus,
  contentBackToCore,
  contentBackToNationalRail,
} from '@constants/textContent';

import {
  VIEW_MODE_BUS,
  VIEW_MODE_CORE,
  VIEW_MODE_NATIONAL_RAIL,
} from '@constants/viewModes';

import {
  VIEW_TYPE_SERVICES,
} from '@constants/viewTypes';

import Layout from '@layouts/Layout';

import ViewErrorPageNotFound from '@views/ViewErrorPageNotFound';
import ViewErrorService from '@views/ViewErrorService';
import ViewServices from '@views/ViewServices';
import ViewService from '@views/ViewService';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      path={PATH_CORE}
    >
      <Route
        element={
          <ViewServices
            serviceGroup="core"
            serviceNamePretty={SERVICE_NAME_PRETTY_CORE}
            viewMode={VIEW_MODE_CORE}
            viewType={VIEW_TYPE_SERVICES}
          />}
        index
      />
      <Route
        element={
          <ViewService
            backTo={{
              path: PATH_CORE,
              text: contentBackToCore,
            }}
            serviceGroup={SERVICE_GROUP_CORE}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_CORE}
          />
        }
        path="service/:id"
      />
      <Route
        element={
          <ViewServices
            serviceGroup="bus"
            serviceNamePretty={SERVICE_NAME_PRETTY_BUS}
            viewMode={VIEW_MODE_BUS}
            viewType={VIEW_TYPE_SERVICES}
          />}
        path={PATH_BUS}
      />
      <Route
        element={
          <ViewService
            backTo={{
              path: `/${PATH_BUS}`,
              text: contentBackToBus,
            }}
            serviceGroup={SERVICE_GROUP_BUS}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_BUS}
          />
        }
        path={`${PATH_BUS}/service/:id`}
      />
      <Route
        element={
          <ViewServices
            serviceGroup="nationalRail"
            serviceNamePretty={SERVICE_NAME_PRETTY_NATIONAL_RAIL}
            viewMode={VIEW_MODE_NATIONAL_RAIL}
            viewType={VIEW_TYPE_SERVICES}
          />}
        path={PATH_NATIONAL_RAIL}
      />
      <Route
        element={
          <ViewService
            backTo={{
              path: `/${PATH_NATIONAL_RAIL}`,
              text: contentBackToNationalRail,
            }}
            serviceGroup={SERVICE_GROUP_NATIONAL_RAIL}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_NATIONAL_RAIL}
          />
        }
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

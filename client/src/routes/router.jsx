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
  PATH_PINNED,
  PATH_SERVICE,
  PATH_STATION,
} from '@constants/paths';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '@constants/serviceGroups';

import {
  SERVICE_NAME_BUS,
  SERVICE_NAME_CORE,
  SERVICE_NAME_NATIONAL_RAIL,
} from '@constants/serviceNames';

import {
  contentBackToBus,
  contentBackToCore,
  contentBackToNationalRail,
} from '@constants/text';

import {
  VIEW_MODE_ALL,
  VIEW_MODE_BUS,
  VIEW_MODE_CORE,
  VIEW_MODE_NATIONAL_RAIL,
} from '@constants/viewModes';

import {
  VIEW_TYPE_ERROR,
  VIEW_TYPE_PINNED,
  VIEW_TYPE_SERVICE,
  VIEW_TYPE_SERVICES,
  VIEW_TYPE_STATION,
} from '@constants/viewTypes';

import Layout from '@layouts/Layout';

import ViewErrorPageNotFound from '@views/ViewErrorPageNotFound';
import ViewErrorService from '@views/ViewErrorService';
import ViewPinned from '@views/ViewPinned';
import ViewServices from '@views/ViewServices';
import ViewService from '@views/ViewService';
import ViewStation from '@views/ViewStation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      path={`/${PATH_CORE}`}
    >
      <Route
        element={
          <ViewServices
            serviceGroup={SERVICE_GROUP_CORE}
            serviceName={SERVICE_NAME_CORE}
            viewMode={VIEW_MODE_CORE}
            viewType={VIEW_TYPE_SERVICES}
          />}
        index
      />
      <Route
        element={
          <ViewService
            backTo={{
              path: `/${PATH_CORE}`,
              text: contentBackToCore,
            }}
            serviceGroup={SERVICE_GROUP_CORE}
            serviceGroupPath={PATH_CORE}
            viewMode={VIEW_MODE_CORE}
            viewType={VIEW_TYPE_SERVICE}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_CORE}
            viewMode={VIEW_MODE_CORE}
            viewType={VIEW_TYPE_ERROR}
          />
        }
        path={`${PATH_SERVICE}/:id`}
      />
      <Route
        element={
          <ViewPinned
            backTo={{
              path: `/${PATH_CORE}`,
              text: contentBackToCore,
            }}
            serviceGroup={SERVICE_GROUP_CORE}
            viewMode={VIEW_MODE_CORE}
            viewType={VIEW_TYPE_PINNED}
          />
        }
        path={`/${PATH_PINNED}`}
      />
      <Route
        element={
          <ViewServices
            serviceGroup={SERVICE_GROUP_BUS}
            serviceName={SERVICE_NAME_BUS}
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
            serviceGroupPath={`/${PATH_BUS}`}
            viewMode={VIEW_MODE_BUS}
            viewType={VIEW_TYPE_SERVICE}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_BUS}
            viewMode={VIEW_MODE_BUS}
            viewType={VIEW_TYPE_ERROR}
          />
        }
        path={`${PATH_BUS}/${PATH_SERVICE}/:id`}
      />
      <Route
        element={
          <ViewPinned
            backTo={{
              path: `/${PATH_BUS}`,
              text: contentBackToBus,
            }}
            serviceGroup={SERVICE_GROUP_BUS}
            viewMode={VIEW_MODE_BUS}
            viewType={VIEW_TYPE_PINNED}
          />
        }
        path={`${PATH_BUS}/${PATH_PINNED}`}
      />
      <Route
        element={
          <ViewServices
            serviceGroup={SERVICE_GROUP_NATIONAL_RAIL}
            serviceName={SERVICE_NAME_NATIONAL_RAIL}
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
            serviceGroupPath={`/${PATH_NATIONAL_RAIL}`}
            viewMode={VIEW_MODE_NATIONAL_RAIL}
            viewType={VIEW_TYPE_SERVICE}
          />
        }
        errorElement={
          <ViewErrorService
            serviceGroup={SERVICE_GROUP_NATIONAL_RAIL}
            viewMode={VIEW_MODE_NATIONAL_RAIL}
            viewType={VIEW_TYPE_ERROR}
          />
        }
        path={`${PATH_NATIONAL_RAIL}/${PATH_SERVICE}/:id`}
      />
      <Route
        element={
          <ViewPinned
            backTo={{
              path: `/${PATH_NATIONAL_RAIL}`,
              text: contentBackToNationalRail,
            }}
            serviceGroup={SERVICE_GROUP_NATIONAL_RAIL}
            viewMode={VIEW_MODE_NATIONAL_RAIL}
            viewType={VIEW_TYPE_PINNED}
          />
        }
        path={`${PATH_NATIONAL_RAIL}/${PATH_PINNED}`}
      />
      <Route
        element={
          <ViewStation
            viewMode={VIEW_MODE_ALL}
            viewType={VIEW_TYPE_STATION}
          />
        }
        path={`/${PATH_STATION}/:id`}
      />
      <Route
        path='*'
        element={<ViewErrorPageNotFound />}
        viewType={VIEW_TYPE_ERROR}
      />
    </Route>,
  ),
);

export default router;

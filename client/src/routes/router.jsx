import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Layout from '@layouts/Layout';

import ViewErrorPageNotFound from '@views/ViewErrorPageNotFound';
import ViewErrorService from '@views/ViewErrorService';
import ViewHome from '@views/ViewHome';
import ViewService from '@views/ViewService';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      path="/"
    >
      <Route
        element={<ViewHome />}
        index
      />
      <Route
        element={<ViewService />}
        errorElement={<ViewErrorService />}
        path="service/:id"
      />
      <Route
        path='*'
        element={<ViewErrorPageNotFound />}
      />
    </Route>,
  ),
);

export default router;

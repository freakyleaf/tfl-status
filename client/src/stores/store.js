const { PUBLIC_ENV } = import.meta.env;

import { configureStore } from '@reduxjs/toolkit/';

import { mapsApi } from '@api/mapsApi';
import { servicesApi } from '@api/servicesApi';
import { stationsApi } from '@api/stationsApi';

import settingsReducer from './storeSliceSettings';
import stateReducer from './storeSliceState';

export const store = configureStore({
  reducer: {
    [mapsApi.reducerPath]: mapsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [stationsApi.reducerPath]: stationsApi.reducer,
    devTools: PUBLIC_ENV === 'development',
    settings: settingsReducer,
    state: stateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    mapsApi.middleware,
    servicesApi.middleware,
    stationsApi.middleware,
  ),
});

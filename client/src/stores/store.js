const { PUBLIC_ENV } = import.meta.env;

import { configureStore } from '@reduxjs/toolkit/';

import { linesApi } from '@api/linesApi';
import { stationsApi } from '@api/stationsApi';
import { statusApi } from '@api/statusApi';

import linesReducer from './storeSliceLines';
import settingsReducer from './storeSliceSettings';
import stationsReducer from './storeSliceStations';
import statusReducer from './storeSliceStatus';

export const store = configureStore({
  reducer: {
    [linesApi.reducerPath]: linesApi.reducer,
    [stationsApi.reducerPath]: stationsApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    lines: linesReducer,
    settings: settingsReducer,
    stations: stationsReducer,
    status: statusReducer,
    devTools: PUBLIC_ENV === 'development',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    linesApi.middleware,
    stationsApi.middleware,
    statusApi.middleware,
  ),
});

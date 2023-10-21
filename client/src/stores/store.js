const { PUBLIC_ENV } = import.meta.env;

import { configureStore } from '@reduxjs/toolkit/';

import { linesApi } from '@api/linesApi';
import { statusApi } from '@api/statusApi';

import linesReducer from './storeSliceLines';
import settingsReducer from './storeSliceSettings';
import statusReducer from './storeSliceStatus';

export const store = configureStore({
  reducer: {
    [linesApi.reducerPath]: linesApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    lines: linesReducer,
    settings: settingsReducer,
    status: statusReducer,
    devTools: PUBLIC_ENV === 'development',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    linesApi.middleware,
    statusApi.middleware,
  ),
});

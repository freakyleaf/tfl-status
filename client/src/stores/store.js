const { PUBLIC_ENV } = import.meta.env;

import { configureStore } from '@reduxjs/toolkit/';

import { statusApi } from '@api/statusApi';

import  statusReducer from './storeSliceStatus';

export const store = configureStore({
  reducer: {
    [statusApi.reducerPath]: statusApi.reducer,
    status: statusReducer,
    devTools: PUBLIC_ENV === 'development',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    statusApi.middleware,
  ),
});

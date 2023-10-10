import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';

import conformData from '@utils/conformData';

export const statusApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'statusApi',
  tagTypes: [ 'status' ],
  endpoints: (builder) => ({
    fetchStatuses: builder.query({
      query: () => '/status',
      providesTags: [ 'status' ],
      transformResponse: (data) => conformData(data),
    }),
  }),
});

export const {
  useFetchStatusesQuery,
} = statusApi;

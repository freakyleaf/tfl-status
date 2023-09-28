import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import groupBy from 'lodash.groupby';

import baseUrl from '@constants/baseUrl';
import serviceModes from '@constants/serviceModes';

export const statusApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'statusApi',
  tagTypes: [ 'status' ],
  endpoints: (builder) => ({
    fetchStatuses: builder.query({
      query: () => '/status',
      providesTags: [ 'status' ],
      transformResponse: (status) => {
        if (status.code === 'ERR_BAD_REQUEST' || status.code === 'ENOTFOUND') return [];
        const statusGrouped = groupBy(status, 'modeName');
        const statusSorted = serviceModes.flatMap((serviceMode) => statusGrouped[serviceMode]);
        return statusSorted;
      },
    }),
  }),
});

export const {
  useFetchStatusesQuery,
} = statusApi;

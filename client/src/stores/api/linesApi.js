import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';

export const linesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'linesApi',
  tagTypes: [ 'lines' ],
  endpoints: (builder) => ({
    fetchLines: builder.query({
      query: (line) => `/lines/${line}`,
      providesTags: [ 'lines' ],
      transformResponse: (data) => {
        if ([ 'ENOTFOUND', 'ERR_BAD_REQUEST' ].includes(data.code)) return [];
        return data;
      },
    }),
  }),
});

export const {
  useFetchLinesQuery,
} = linesApi;

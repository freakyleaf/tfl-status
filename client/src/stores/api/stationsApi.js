import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';

export const stationsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'stationsApi',
  tagTypes: [ 'stations' ],
  endpoints: (builder) => ({
    fetchStations: builder.query({
      query: (station) => `/stations/${station}`,
      providesTags: [ 'stations' ],
      transformResponse: (data) => {
        if ([ 'ENOTFOUND', 'ERR_BAD_REQUEST' ].includes(data.code)) return [];
        return data;
      },
    }),
  }),
});

export const {
  useFetchStationsQuery,
} = stationsApi;

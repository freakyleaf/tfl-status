import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';

import sortMapRouteStationsByZones from '@utils/sortMapRouteStationsByZones';

export const mapsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'mapsApi',
  tagTypes: [ 'maps' ],
  endpoints: (builder) => ({
    fetchMaps: builder.query({
      query: (id) => `/maps/${id}`,
      providesTags: [ 'maps' ],
      transformResponse: (data) => {
        if ([ 'ENOTFOUND', 'ERR_BAD_REQUEST' ].includes(data.code)) return [];
        return sortMapRouteStationsByZones(data);
      },
    }),
  }),
});

export const {
  useFetchMapsQuery,
  useLazyFetchMapsQuery,
} = mapsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';

import conformServices from '@utils/conformServices';

export const servicesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'servicesApi',
  tagTypes: [ 'services' ],
  endpoints: (builder) => ({
    fetchServices: builder.query({
      query: (group) => `/services/${group}`,
      providesTags: [ 'services' ],
      transformResponse: (data) => {
        if ([ 'ENOTFOUND', 'ERR_BAD_REQUEST' ].includes(data.code)) return [];
        return conformServices(data);
      },
    }),
  }),
});

export const {
  useFetchServicesQuery,
  useLazyFetchServicesQuery,
} = servicesApi;

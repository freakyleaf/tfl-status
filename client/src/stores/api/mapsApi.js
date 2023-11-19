const {
  PUBLIC_ENV,
  PUBLIC_MAP_ENRICHMENT,
} = import.meta.env;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrlServer } from '@constants/baseUrl';
import {
  STATUS_DESCRIPTION_PART_CLOSURE,
  STATUS_DESCRIPTION_PART_SUSPENDED,
} from '@constants/statusDescriptions';

import serviceStatusIncludes from '@utils/serviceStatusIncludes';
import sortMapRouteStationsByZones from '@utils/sortMapRouteStationsByZones';

export const mapsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlServer }),
  reducerPath: 'mapsApi',
  tagTypes: [ 'maps' ],
  endpoints: (builder) => ({
    fetchMaps: builder.query({
      query: (service) => {
        const serviceStatusPartClosure = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_PART_CLOSURE });
        const serviceStatusPartSuspended = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_PART_SUSPENDED });

        if ((serviceStatusPartClosure || serviceStatusPartSuspended) && PUBLIC_MAP_ENRICHMENT === 'true') {
          return {
            url: `/maps/${service.id}`,
            params: { reasons: JSON.stringify(service.reasonsConformed) },
          };
        }

        return `/maps/${service.id}`;
      },
      providesTags: [ 'maps' ],
      transformResponse: (data) => {
        if ([ 'ENOTFOUND', 'ERR_BAD_REQUEST' ].includes(data.code)) return [];
        if (PUBLIC_ENV === 'development') {
          if (data.enrichedData) console.log(JSON.stringify(data.enrichedData, null, 2));
          if (data.error) console.error(data.error);
        }
        return sortMapRouteStationsByZones(data.maps);
      },
    }),
  }),
});

export const {
  useFetchMapsQuery,
  useLazyFetchMapsQuery,
} = mapsApi;

import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_GREATER_ANGLIA,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_PICCADILLY,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_GREATER_ANGLIA,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_PICCADILLY,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_LONDON_OVERGROUND,
  OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
  OSI_DISTANCE_HANGER_LANE_TUBE_PARK_ROYAL_TUBE,
  OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GHACKNYC', // Hackney Central
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Hackney Downs',
                  distance: OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_GREATER_ANGLIA,
              labels: [
                {
                  text: 'Hackney Downs',
                  distance: OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_GREATER_ANGLIA,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GHAKNYNM', // Hackney Downs
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Hackney Central',
                  distance: OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUHGR', // Hanger Lane
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Park Royal',
                  distance: OSI_DISTANCE_HANGER_LANE_TUBE_PARK_ROYAL_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_PICCADILLY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GHRGYGL', // Harringay Green Lanes
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Manor House',
                  distance: OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_PICCADILLY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBHX4', // Heathrow Terminal 4
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBHX5', // Heathrow Terminal 5
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBH13', // Heathrow Terminals 2 & 3
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

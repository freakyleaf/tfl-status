import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_PICCADILLY,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_PICCADILLY,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HANGER_LANE_TUBE_PARK_ROYAL_TUBE,
  OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
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

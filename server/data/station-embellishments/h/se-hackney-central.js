import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_GREATER_ANGLIA,
  SERVICE_ID_LONDON_OVERGROUND,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_GREATER_ANGLIA,
  SERVICE_NAME_LONDON_OVERGROUND,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_LONDON_OVERGROUND,
  OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
} from '../../osiDistances.js';

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
];

export default stationEmbellishments;

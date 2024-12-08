import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_INFO,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_INFO_BIRMINGHAM_AIRPORT,
} from '../../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_METROPOLITAN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: 'HUBEUS', // Euston
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
            {
              id: SERVICE_ID_METROPOLITAN,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_METROPOLITAN,
            },
          ],
        },
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_BIRMINGHAM_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
];

import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_NORTHERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GCLPHHS', // Clapham High Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Clapham North',
                  distance: OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

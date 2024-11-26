import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_WINDRUSH,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUCPN', // Clapham North
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_WINDRUSH,
              labels: [
                {
                  text: 'Clapham High Street',
                  distance: OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_WINDRUSH,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_BAKERLOO,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUNKP', // Northwick Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_BAKERLOO,
              labels: [
                {
                  text: 'Kenton',
                  distance: OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_BAKERLOO,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

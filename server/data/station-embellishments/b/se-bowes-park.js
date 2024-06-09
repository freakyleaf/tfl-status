import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_PICCADILLY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GBOWESPK', // Bowes Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Bounds Green',
                  distance: OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
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
];

export default stationEmbellishments;

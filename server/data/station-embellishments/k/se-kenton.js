import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_METROPOLITAN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBKNT', // Kenton
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_METROPOLITAN,
              labels: [
                {
                  text: 'Northwick Park',
                  distance: OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_METROPOLITAN,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

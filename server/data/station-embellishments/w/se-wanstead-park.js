import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_ELIZABETH,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_ELIZABETH_LINE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_ELIZABETH,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GWNSTDPK', // Wanstead Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Forest Gate',
                  distance: OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_ELIZABETH_LINE,
              name: SERVICE_NAME_ELIZABETH,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

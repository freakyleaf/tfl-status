import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_LONDON_OVERGROUND,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_LONDON_OVERGROUND,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GFRSTGT', // Forest Gate
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Wanstead Park',
                  distance: OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
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
];

export default stationEmbellishments;

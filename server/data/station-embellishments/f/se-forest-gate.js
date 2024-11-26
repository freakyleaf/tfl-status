import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_SUFFRAGETTE,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_SUFFRAGETTE,
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
              id: SERVICE_ID_SUFFRAGETTE,
              labels: [
                {
                  text: 'Wanstead Park',
                  distance: OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_SUFFRAGETTE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

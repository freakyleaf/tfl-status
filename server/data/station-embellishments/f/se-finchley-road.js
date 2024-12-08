import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_MILDMAY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FINCHLEY_ROAD_TUBE_FINCHLEY_ROAD_FROGNAL_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZLUFYR', // Finchley Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_MILDMAY,
              labels: [
                {
                  text: 'Finchley Road & Frognal',
                  distance: OSI_DISTANCE_FINCHLEY_ROAD_TUBE_FINCHLEY_ROAD_FROGNAL_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_MILDMAY,
            },
          ],
        },
      ],
    },
  },
];
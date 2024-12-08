import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_METROPOLITAN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FINCHLEY_ROAD_TUBE_FINCHLEY_ROAD_FROGNAL_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GFNCHLYR', // Finchley Road & Frognal
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Finchley Road',
                  distance: OSI_DISTANCE_FINCHLEY_ROAD_TUBE_FINCHLEY_ROAD_FROGNAL_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
            {
              id: SERVICE_ID_METROPOLITAN,
              labels: [
                {
                  text: 'Finchley Road',
                  distance: OSI_DISTANCE_FINCHLEY_ROAD_TUBE_FINCHLEY_ROAD_FROGNAL_LONDON_OVERGROUND,
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

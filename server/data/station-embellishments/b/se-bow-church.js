import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_HAMMERSMITH_CITY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZDLBOW', // Bow Church
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Bow Road',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Bow Road',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

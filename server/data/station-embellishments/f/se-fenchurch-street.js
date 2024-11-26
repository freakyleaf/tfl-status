import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_DLR,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GFENCHRS', // Fenchurch Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Tower Hill',
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Tower Hill',
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Tower Gateway',
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
                },
              ],
              mode: SERVICE_MODE_DLR,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

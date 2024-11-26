import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_NORTHERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GCMDNRD', // Camden Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Camden Town',
                  distance: OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

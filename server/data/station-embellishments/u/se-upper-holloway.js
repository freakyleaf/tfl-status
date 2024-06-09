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
  OSI_DISTANCE_ARCHWAY_TUBE_UPPER_HOLLOWAY_LONDON_OVERGROUND,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GUPRHLWY', // Upper Holloway
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Archway',
                  distance: OSI_DISTANCE_ARCHWAY_TUBE_UPPER_HOLLOWAY_LONDON_OVERGROUND,
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

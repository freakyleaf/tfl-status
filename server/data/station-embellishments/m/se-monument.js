import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CENTRAL,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CENTRAL,
  SERVICE_NAME_NORTHERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUMMT', // Monument
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'Bank',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CENTRAL,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Bank',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
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

import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBCHX', // Charing Cross
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Embankment',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Embankment',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

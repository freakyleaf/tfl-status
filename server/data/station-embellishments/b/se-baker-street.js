import {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CHILTERN_RAILWAYS,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CHILTERN_RAILWAYS,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZLUBST', // Baker Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_CHILTERN_RAILWAYS,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Marylebone',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_CHILTERN_RAILWAYS,
            },
          ],
        },
      ],
    },
  },
];

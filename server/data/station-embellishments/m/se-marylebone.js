import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_METROPOLITAN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBMYB', // Marylebone
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
            {
              id: SERVICE_ID_METROPOLITAN,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
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

export default stationEmbellishments;

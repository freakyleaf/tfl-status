import {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_SOUTHEASTERN,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_NATIONAL_RAIL,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_SOUTHEASTERN,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUSWK', // Southwark
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'Waterloo East',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

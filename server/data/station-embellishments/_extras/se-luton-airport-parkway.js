import {
  SERVICE_GROUP_EXTRA,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_MODE_AEROPLANE,
} from '../../../constants/serviceModes.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GLUTOAPY', // Luton Airport Parkway
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

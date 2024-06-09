import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_VICTORIA,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_VICTORIA,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '930GMBK', // Millbank Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_VICTORIA,
              labels: [
                {
                  text: 'Pimlico',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_VICTORIA,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

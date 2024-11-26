import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DLR,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DLR,
} from '../../../constants/serviceNames.js';

const stationEmbellishments = [
  {
    topMostParentId: '930GWRF', // Royal Wharf Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Pontoon Dock',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

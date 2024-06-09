import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_JUBILEE,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '930GMIL', // North Greenwich Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'North Greenwich',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

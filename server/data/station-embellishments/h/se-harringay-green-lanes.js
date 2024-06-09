import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_PICCADILLY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GHRGYGL', // Harringay Green Lanes
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Manor House',
                  distance: OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_PICCADILLY,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

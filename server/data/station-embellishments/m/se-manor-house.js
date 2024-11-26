import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_SUFFRAGETTE,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_SUFFRAGETTE,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUMRH', // Manor House
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_SUFFRAGETTE,
              labels: [
                {
                  text: 'Harringay Green Lanes',
                  distance: OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_SUFFRAGETTE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

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

import {
  OSI_DISTANCE_SOUTH_HAMPSTEAD_OVERGROUND_SWISS_COTTAGE_TUBE,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GSHMPSTD', // South Hampstead
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Swiss Cottage',
                  distance: OSI_DISTANCE_SOUTH_HAMPSTEAD_OVERGROUND_SWISS_COTTAGE_TUBE,
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

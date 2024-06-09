import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_LONDON_OVERGROUND,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_LONDON_OVERGROUND,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GHAKNYNM', // Hackney Downs
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Hackney Central',
                  distance: OSI_DISTANCE_HACKNEY_CENTRAL_LONDON_OVERGROUND_HACKNEY_DOWNS_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

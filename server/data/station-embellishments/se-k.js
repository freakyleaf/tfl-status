import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_WOOLWICH_FERRY,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_METROPOLITAN,
  SERVICE_NAME_WOOLWICH_FERRY,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBKNT', // Kenton
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_METROPOLITAN,
              labels: [
                {
                  text: 'Northwick Park',
                  distance: OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
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
  {
    topMostParentId: '940GZZDLKGV', // King George V
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_WOOLWICH_FERRY,
              labels: [
                {
                  text: 'Woolwich Ferry North Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_WOOLWICH_FERRY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBKGX', // King's Cross and St Pancras International
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

import {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_GREAT_NORTHERN,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_NATIONAL_RAIL,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_GREAT_NORTHERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUBDS', // Bounds Green
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_GREAT_NORTHERN,
              labels: [
                {
                  text: 'Bowes Park',
                  distance: OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_GREAT_NORTHERN,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

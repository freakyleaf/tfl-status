import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_SOUTH_WESTERN_RAILWAY,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '930GWMP', // Waterloo Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_BAKERLOO,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_BAKERLOO,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTH_WESTERN_RAILWAY,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

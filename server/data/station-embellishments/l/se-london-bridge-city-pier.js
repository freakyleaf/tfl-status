import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_SOUTHERN,
  SERVICE_ID_THAMESLINK,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_SOUTHERN,
  SERVICE_NAME_THAMESLINK,
} from '../../../constants/serviceNames.js';

const stationEmbellishments = [
  {
    topMostParentId: '930GLBR', // London Bridge City Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'London Bridge',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'London Bridge',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'London Bridge',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
            {
              id: SERVICE_ID_SOUTHERN,
              labels: [
                {
                  text: 'London Bridge',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHERN,
            },
            {
              id: SERVICE_ID_THAMESLINK,
              labels: [
                {
                  text: 'London Bridge',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_THAMESLINK,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

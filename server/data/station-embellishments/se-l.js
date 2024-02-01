import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_SOUTHERN,
  SERVICE_ID_THAMESLINK,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_SOUTHERN,
  SERVICE_NAME_THAMESLINK,
} from '../../constants/serviceNames.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBLST', // Liverpool Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              labels: [
                {
                  text: 'Trains to Gatwick Airport',
                },
                {
                  text: 'Trains to Southend Airport',
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBLBG', // London Bridge
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              labels: [
                {
                  text: 'Trains to Gatwick Airport',
                },
                {
                  text: 'Trains to Luton Airport',
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'London Bridge City Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'London Bridge City Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'London Bridge City Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_6,
            },
          ],
        },
      ],
    },
  },
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
  {
    topMostParentId: 'HUBLCY', // London City Airport
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

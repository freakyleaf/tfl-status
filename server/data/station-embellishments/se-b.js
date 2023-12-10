import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CHILTERN_RAILWAYS,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_GREAT_NORTHERN,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_PICCADILLY,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_THAMESLINK,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_DLR,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_CHILTERN_RAILWAYS,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_GREAT_NORTHERN,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_PICCADILLY,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_THAMESLINK,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
  OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
  OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
  OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUBST', // Baker Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_CHILTERN_RAILWAYS,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Marylebone',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_CHILTERN_RAILWAYS,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBBAN', // Bank
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Monument',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Monument',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GBKRVS', // Barking Riverside
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Barking Riverside Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GBRVS', // Barking Riverside Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Barking Riverside',
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
  {
    topMostParentId: '940GZZBPSUST', // Battersea Power Station
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Battersea Power Station Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Battersea Power Station Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Battersea Power Station Pier',
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
    topMostParentId: '930GBSP', // Battersea Power Station Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Battersea Power Station',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBBFR', // Blackfriars
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Blackfriars Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Blackfriars Pier',
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
    topMostParentId: '930GBFR', // Blackfriars Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
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
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
            {
              id: SERVICE_ID_THAMESLINK,
              labels: [
                {
                  text: 'Blackfriars',
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
  {
    topMostParentId: '940GZZDLBOW', // Bow Church
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Bow Road',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Bow Road',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUBWR', // Bow Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Bow Church',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_DLR,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GBOWESPK', // Bowes Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Bounds Green',
                  distance: OSI_DISTANCE_BOUNDS_GREEN_TUBE_BOWES_PARK_NATIONAL_RAIL,
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

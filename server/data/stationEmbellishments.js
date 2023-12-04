import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_4,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTH_WESTERN_RAILWAY,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_SOUTHERN,
  SERVICE_ID_THAMESLINK,
  SERVICE_ID_VICTORIA,
  SERVICE_ID_WOOLWICH_FERRY,
} from '../constants/serviceIds.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_COACH,
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../constants/serviceModes.js';

import {
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_4,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_SOUTHERN,
  SERVICE_NAME_THAMESLINK,
  SERVICE_NAME_VICTORIA,
  SERVICE_NAME_WOOLWICH_FERRY,
} from '../constants/serviceNames.js';

const stationEmbellishments = {
  stations: [
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
                  'Barking Riverside Pier',
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
                  'Barking Riverside',
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
                  'Battersea Power Station Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Battersea Power Station Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Battersea Power Station Pier',
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
                  'Battersea Power Station',
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
                  'Blackfriars Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Blackfriars Pier',
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
                  'Blackfriars',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  'Blackfriars',
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
                  'Blackfriars',
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTHEASTERN,
              },
              {
                id: SERVICE_ID_THAMESLINK,
                labels: [
                  'Blackfriars',
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
      topMostParentId: 'HUBCAW', // Canary Wharf
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Canary Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Canary Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_4,
                labels: [
                  'Canary Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_4,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Canary Wharf Pier',
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
      topMostParentId: '930GCAW', // Canary Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  'Canary Wharf',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_JUBILEE,
              },
              {
                id: SERVICE_ID_ELIZABETH,
                labels: [
                  'Canary Wharf',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_ELIZABETH,
              },
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Canary Wharf',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '930GCHP', // Chelsea Habour Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_LONDON_OVERGROUND,
                labels: [
                  'Imperial Wharf',
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
      topMostParentId: 'HUBCUT', // Cutty Sark
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Greenwich Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Greenwich Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Greenwich Pier',
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
      topMostParentId: '940GZZLUEMB', // Embankment
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Embankment Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Embankment Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Embankment Pier',
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
      topMostParentId: '930GEMB', // Embankment Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_BAKERLOO,
                labels: [
                  'Embankment',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_BAKERLOO,
              },
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  'Embankment',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  'Embankment',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_NORTHERN,
                labels: [
                  'Embankment',
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
      topMostParentId: '930GGNW', // Greenwich Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Cutty Sark',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBHX4', // Heathrow Terminal 4
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
    {
      topMostParentId: 'HUBHX5', // Heathrow Terminal 5
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
    {
      topMostParentId: 'HUBH13', // Heathrow Terminals 2 & 3
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
    {
      topMostParentId: 'HUBIMP', // Imperial Wharf
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Chelsea Harbour Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Chelsea Harbour Pier',
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
      topMostParentId: '940GZZDLKGV', // King George V
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_WOOLWICH_FERRY,
                labels: [
                  'Woolwich Ferry North Pier',
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
    {
      topMostParentId: 'HUBLBG', // London Bridge
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'London Bridge City Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'London Bridge City Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'London Bridge City Pier',
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
                  'London Bridge',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_JUBILEE,
              },
              {
                id: SERVICE_ID_NORTHERN,
                labels: [
                  'London Bridge',
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
                  'London Bridge',
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTHEASTERN,
              },
              {
                id: SERVICE_ID_SOUTHERN,
                labels: [
                  'London Bridge',
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTHERN,
              },
              {
                id: SERVICE_ID_THAMESLINK,
                labels: [
                  'London Bridge',
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
    {
      topMostParentId: '930GMHT', // Masthouse Terrace Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Mudchute',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '930GMBK', // Millbank Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_VICTORIA,
                labels: [
                  'Pimlico',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_VICTORIA,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '940GZZDLMUD', // Mudchute
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Masthouse Terrace Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Masthouse Terrace Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Masthouse Terrace Pier',
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
      topMostParentId: 'HUBNGW', // North Greenwich
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'North Greenwich Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'North Greenwich Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'North Greenwich Pier',
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
      topMostParentId: '930GMIL', // North Greenwich Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  'North Greenwich',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_JUBILEE,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '940GZZLUPCO', // Pimlico
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Millbank Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Millbank Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Millbank Pier',
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
      topMostParentId: '940GZZDLPDK', // Pontoon Dock
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Royal Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Royal Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Royal Wharf Pier',
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
      topMostParentId: '940GZZLUPYB', // Putney Bridge
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Putney Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Putney Pier',
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
      topMostParentId: '930GPUT', // Putney Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  'Putney Bridge',
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
      topMostParentId: '930GWRF', // Royal Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Pontoon Dock',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '940GZZDLSIT', // Stratford International (DLR)
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
    {
      topMostParentId: 'HUBTOG', // Tower Gateway
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Tower Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Tower Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Tower Pier',
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
      topMostParentId: '940GZZLUTWH', // Tower Hill
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Tower Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Tower Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Tower Pier',
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
      topMostParentId: '930GTMP', // Tower Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  'Tower Hill',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  'Tower Hill',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Tower Gateway',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBVXH', // Vauxhall
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Vauxhall St George Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Vauxhall St George Wharf Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Vauxhall St George Wharf Pier',
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
      topMostParentId: '930GSGW', // Vauxhall St George Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_VICTORIA,
                labels: [
                  'Vauxhall',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_VICTORIA,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBVIC', // Victoria
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_EXTRA,
            lines: [
              {
                mode: SERVICE_MODE_COACH,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBWAT', // Waterloo
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'London Eye Waterloo Pier',
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
      topMostParentId: '930GWMP', // Waterloo Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_BAKERLOO,
                labels: [
                  'Waterloo',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_BAKERLOO,
              },
              {
                id: SERVICE_ID_NORTHERN,
                labels: [
                  'Waterloo',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_NORTHERN,
              },
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  'Waterloo',
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
                  'Waterloo',
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBWSM', // Westminster
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Westminster Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Westminster Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Westminster Pier',
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
      topMostParentId: '930GWMR', // Westminster Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  'Westminster',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  'Westminster',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  'Westminster',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_JUBILEE,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: 'HUBWWA', // Woolwich Arsenal
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  'Woolwich Arsenal Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  'Woolwich Arsenal Pier',
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  'Woolwich Arsenal Pier',
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
      topMostParentId: '930GWAS', // Woolwich Arsenal Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'Woolwich Arsenal',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
          {
            group: SERVICE_GROUP_NATIONAL_RAIL,
            lines: [
              {
                id: SERVICE_ID_SOUTHEASTERN,
                labels: [
                  'Woolwich Arsenal',
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTHEASTERN,
              },
              {
                id: SERVICE_ID_THAMESLINK,
                labels: [
                  'Woolwich Arsenal',
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
      topMostParentId: '930GWWC', // Woolwich Ferry North Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  'King George V',
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DLR,
              },
            ],
          },
        ],
      },
    },
    {
      topMostParentId: '910GASHFKY', // Ashford International
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
    {
      topMostParentId: '910GBHAMINT', // Birmingham International
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
    {
      topMostParentId: '910GEBSFDOM', // Ebbsfleet International
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
    {
      topMostParentId: '910GGTWK', // Gatwick Airport
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
    {
      topMostParentId: '910GLUTOAPY', // Luton Airport Parkway
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
    {
      topMostParentId: '910GMNCRIAP', // Manchester Airport
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
    {
      topMostParentId: '9100SOTPKWY1', // Southampton Airport Parkway
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
    {
      topMostParentId: '910GSTHEAIR', // Southend Airport
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
    {
      topMostParentId: '910GSTFODOM', // Stratford International (Southeastern)
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
  ],
};

export default stationEmbellishments;

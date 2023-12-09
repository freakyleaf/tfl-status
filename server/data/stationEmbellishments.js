import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../constants/serviceGroups.js';

import {
  SERVICE_ID_AVANTI_WEST_COAST,
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_METROPOLITAN,
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
  SERVICE_ID_WEST_MIDLANDS_TRAINS,
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
  SERVICE_NAME_AVANTI_WEST_COAST,
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_METROPOLITAN,
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
  SERVICE_NAME_WEST_MIDLANDS_TRAINS,
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
      topMostParentId: 'HUBCAW', // Canary Wharf
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'Canary Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Canary Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_4,
                labels: [
                  {
                    text: 'Canary Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_4,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Canary Wharf Pier',
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
      topMostParentId: '930GCAW', // Canary Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  {
                    text: 'Canary Wharf',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_JUBILEE,
              },
              {
                id: SERVICE_ID_ELIZABETH,
                labels: [
                  {
                    text: 'Canary Wharf',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_ELIZABETH,
              },
              {
                id: SERVICE_ID_DLR,
                labels: [
                  {
                    text: 'Canary Wharf',
                  },
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
                  {
                    text: 'Imperial Wharf',
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
      topMostParentId: 'HUBCUT', // Cutty Sark
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'Greenwich Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Greenwich Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Greenwich Pier',
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
      topMostParentId: '940GZZLUEMB', // Embankment
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'Embankment Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Embankment Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Embankment Pier',
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
      topMostParentId: '930GEMB', // Embankment Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_BAKERLOO,
                labels: [
                  {
                    text: 'Embankment',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_BAKERLOO,
              },
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  {
                    text: 'Embankment',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  {
                    text: 'Embankment',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_NORTHERN,
                labels: [
                  {
                    text: 'Embankment',
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
      topMostParentId: 'HUBEUS', // Euston
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  {
                    text: 'Euston Square',
                    distance: 320,
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_HAMMERSMITH_CITY,
                labels: [
                  {
                    text: 'Euston Square',
                    distance: 320,
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_HAMMERSMITH_CITY,
              },
              {
                id: SERVICE_ID_METROPOLITAN,
                labels: [
                  {
                    text: 'Euston Square',
                    distance: 320,
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
      topMostParentId: '940GZZLUESQ', // Euston Square
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_NORTHERN,
                labels: [
                  {
                    text: 'Euston',
                    distance: 320,
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_NORTHERN,
              },
              {
                id: SERVICE_ID_VICTORIA,
                labels: [
                  {
                    text: 'Euston',
                    distance: 320,
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_VICTORIA,
              },
              {
                id: SERVICE_ID_LONDON_OVERGROUND,
                labels: [
                  {
                    text: 'Euston',
                    distance: 350,
                  },
                ],
                mode: SERVICE_MODE_OVERGROUND,
                name: SERVICE_NAME_LONDON_OVERGROUND,
              },
            ],
          },
          {
            group: SERVICE_GROUP_NATIONAL_RAIL,
            lines: [
              {
                id: SERVICE_ID_AVANTI_WEST_COAST,
                labels: [
                  {
                    text: 'Euston',
                    distance: 350,
                  },
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_AVANTI_WEST_COAST,
              },
              {
                id: SERVICE_ID_WEST_MIDLANDS_TRAINS,
                labels: [
                  {
                    text: 'Euston',
                    distance: 350,
                  },
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_WEST_MIDLANDS_TRAINS,
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
                  {
                    text: 'Cutty Sark',
                  },
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
                  {
                    text: 'Chelsea Harbour Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Chelsea Harbour Pier',
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
                  {
                    text: 'Mudchute',
                  },
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
                  {
                    text: 'Pimlico',
                  },
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
                  {
                    text: 'Masthouse Terrace Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Masthouse Terrace Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Masthouse Terrace Pier',
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
      topMostParentId: 'HUBNGW', // North Greenwich
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'North Greenwich Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'North Greenwich Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'North Greenwich Pier',
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
      topMostParentId: '930GMIL', // North Greenwich Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  {
                    text: 'North Greenwich',
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
                  {
                    text: 'Millbank Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Millbank Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Millbank Pier',
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
      topMostParentId: '940GZZDLPDK', // Pontoon Dock
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'Royal Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Royal Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Royal Wharf Pier',
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
      topMostParentId: '940GZZLUPYB', // Putney Bridge
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Putney Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Putney Pier',
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
      topMostParentId: '930GPUT', // Putney Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  {
                    text: 'Putney Bridge',
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
      topMostParentId: '930GWRF', // Royal Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  {
                    text: 'Pontoon Dock',
                  },
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
                  {
                    text: 'Tower Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Tower Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Tower Pier',
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
      topMostParentId: '940GZZLUTWH', // Tower Hill
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_RIVER_BUS,
            lines: [
              {
                id: SERVICE_ID_RIVER_BUS_1,
                labels: [
                  {
                    text: 'Tower Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Tower Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Tower Pier',
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
      topMostParentId: '930GTMP', // Tower Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  {
                    text: 'Tower Hill',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  {
                    text: 'Tower Hill',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_DLR,
                labels: [
                  {
                    text: 'Tower Gateway',
                  },
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
                  {
                    text: 'Vauxhall St George Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Vauxhall St George Wharf Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Vauxhall St George Wharf Pier',
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
      topMostParentId: '930GSGW', // Vauxhall St George Wharf Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_VICTORIA,
                labels: [
                  {
                    text: 'Vauxhall',
                  },
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
                  {
                    text: 'London Eye Waterloo Pier',
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
                  {
                    text: 'Westminster Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Westminster Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Westminster Pier',
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
      topMostParentId: '930GWMR', // Westminster Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_CIRCLE,
                labels: [
                  {
                    text: 'Westminster',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_CIRCLE,
              },
              {
                id: SERVICE_ID_DISTRICT,
                labels: [
                  {
                    text: 'Westminster',
                  },
                ],
                mode: SERVICE_MODE_TUBE,
                name: SERVICE_NAME_DISTRICT,
              },
              {
                id: SERVICE_ID_JUBILEE,
                labels: [
                  {
                    text: 'Westminster',
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
                  {
                    text: 'Woolwich Arsenal Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_1,
              },
              {
                id: SERVICE_ID_RIVER_BUS_2,
                labels: [
                  {
                    text: 'Woolwich Arsenal Pier',
                  },
                ],
                mode: SERVICE_MODE_RIVER_BUS,
                name: SERVICE_NAME_RIVER_BUS_2,
              },
              {
                id: SERVICE_ID_RIVER_BUS_6,
                labels: [
                  {
                    text: 'Woolwich Arsenal Pier',
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
      topMostParentId: '930GWAS', // Woolwich Arsenal Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  {
                    text: 'Woolwich Arsenal',
                  },
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
                  {
                    text: 'Woolwich Arsenal',
                  },
                ],
                mode: SERVICE_MODE_NATIONAL_RAIL,
                name: SERVICE_NAME_SOUTHEASTERN,
              },
              {
                id: SERVICE_ID_THAMESLINK,
                labels: [
                  {
                    text: 'Woolwich Arsenal',
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
      topMostParentId: '930GWWC', // Woolwich Ferry North Pier
      embellishments: {
        interchanges: [
          {
            group: SERVICE_GROUP_CORE,
            lines: [
              {
                id: SERVICE_ID_DLR,
                labels: [
                  {
                    text: 'King George V',
                  },
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

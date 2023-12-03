import {
  // SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_RIVER_BUS,
} from '../constants/serviceGroups.js';

import {
  // SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_4,
  SERVICE_ID_RIVER_BUS_6,
} from '../constants/serviceIds.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_COACH,
  SERVICE_MODE_EUROSTAR,
  // SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
} from '../constants/serviceModes.js';

import {
  // SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_4,
  SERVICE_NAME_RIVER_BUS_6,
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
    // {
    //   topMostParentId: '930GBRVS', // Barking Riverside Pier
    //   embellishments: {
    //     interchanges: [
    //       {
    //         group: SERVICE_GROUP_CORE,
    //         lines: [
    //           {
    //             id: SERVICE_ID_LONDON_OVERGROUND,
    //             labels: [
    //               'Barking Riverside',
    //             ],
    //             mode: SERVICE_MODE_OVERGROUND,
    //             name: SERVICE_NAME_LONDON_OVERGROUND,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
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

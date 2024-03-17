import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  useFetchStationsQuery,
} from '@api/stationsApi';

import {
  SERVICE_GROUP_EXTRA,
} from '@constants/serviceGroups';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
} from '@constants/serviceModes';

import {
  contentHavingTroubleFetchingData,
  contentNoInformationAvailable,
} from '@constants/text';

import {
  setGlobalLoading,
} from '@stores/storeSliceState';

import buildPageTitle from '@utils/buildPageTitle';
import setView from '@utils/setView';

import Box from '@components/Box';
import Interchanges from '@components/Interchanges';
import PageMain from '@components/PageMain';
import StationIcons from '@components/StationIcons';

ViewStation.propTypes = {
  viewMode: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
};

function ViewStation(props) {
  const {
    viewMode,
    viewType,
  } = props;

  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  const {
    data: station,
    error,
    isFetching,
  } = useFetchStationsQuery(id);

  if (error) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  useEffect(() => {
    setView({ viewMode, viewType });
  }, []);

  useEffect(() => {
    dispatch(setGlobalLoading(isFetching));
  }, [ isFetching ]);

  useEffect(() => {
    if (!station) return;

    document.title = station && buildPageTitle(station.name);
  }, [ location, station ]);

  const hasContact = station && !!Object.keys(station.meta.contact).length;
  const hasBulletins = station && !!station.bulletins.length;
  const hasFacilities = station && !!Object.keys(station.meta.facilities).length;
  const hasZone = station && !!Object.keys(station.meta.zone).length;
  const nothingToDisplay = !hasContact && !hasFacilities && !hasZone;

  const stationInterchanges = (station) => {
    return station.interchanges.map((interchange) => {
      // We only want to return `SERVICE_MODE_AIRPORT_CONNECTION` in `SERVICE_GROUP_EXTRA` if it exists
      if (interchange.group === SERVICE_GROUP_EXTRA) {
        const airportConnection = interchange.lines.find((line) => line.mode === SERVICE_MODE_AIRPORT_CONNECTION);
        if (airportConnection) {
          return {
            ...interchange,
            lines: [ airportConnection ],
          };
        }
      }
      return interchange;
    });
  };

  return (
    <div className="view view--station">
      <PageMain>
        <>
          {
            station && (
              <div className="station">
                <header className="station__header">
                  <h1 className="station__heading">
                    {station.name}
                  </h1>
                  <StationIcons
                    station={station}
                  />
                </header>
                {
                  hasZone && (
                    <div className="station__zone">
                      {station.meta.zone.multiple ? 'Zones' : 'Zone'} {station.meta.zone.zones}
                    </div>
                  )
                }
                {
                  !!hasBulletins && (
                    <div className="station__bulletins">
                      <h2>
                        Station Bulletins
                      </h2>
                      <ul className="station__bulletins-list">
                        {
                          station.bulletins.map((bulletin, index) => (
                            <li
                              className="station__bulletins-list-item"
                              key={index}
                            >
                              <Box
                                type={bulletin.appearance}
                              >
                                {bulletin.description}
                              </Box>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
                {
                  !!station.interchanges.length && (
                    <div className="station__interchanges">
                      <h2>
                        Station Interchanges
                      </h2>
                      {
                        !!station.interchanges.length && (
                          <Interchanges
                            station={station}
                            stationInterchanges={stationInterchanges(station)}
                          />
                        )
                      }
                    </div>
                  )
                }
                {
                  !!hasFacilities && (
                    <div className="station__facilities">
                      <h2>
                        Station Facilities
                      </h2>
                      <table className="table table--striped">
                        <tbody>
                          {
                            station.meta.facilities.carPark && (
                              <tr>
                                <th>
                                  Car Park
                                </th>
                                <td className="w-100">
                                  {station.meta.facilities.carPark}
                                </td>
                              </tr>
                            )
                          }
                          {
                            !!station.meta.facilities.cashMachines && (
                              <tr>
                                <th>
                                  Cash Machines
                                </th>
                                <td>
                                  {station.meta.facilities.cashMachines}
                                </td>
                              </tr>
                            )
                          }
                          {
                            !!station.meta.facilities.escalators && (
                              <tr>
                                <th>
                                  Escalators
                                </th>
                                <td>
                                  {station.meta.facilities.escalators}
                                </td>
                              </tr>
                            )
                          }
                          {
                            !!station.meta.facilities.lifts && (
                              <tr>
                                <th>
                                  Lifts
                                </th>
                                <td>
                                  {station.meta.facilities.lifts}
                                </td>
                              </tr>
                            )
                          }
                          {
                            station.meta.facilities.toilets && (
                              <tr>
                                <th>
                                  Toilets
                                </th>
                                <td>
                                  {station.meta.facilities.toilets}
                                </td>
                              </tr>
                            )
                          }
                          {
                            station.meta.facilities.wiFi && (
                              <tr>
                                <th>
                                  WiFi
                                </th>
                                <td>
                                  {station.meta.facilities.wiFi}
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                    </div>
                  )
                }
                {
                  !!hasContact && (
                    <div className="station__contact">
                      <h2>
                        Station Contact
                      </h2>
                      <ul className="station__contact-list">
                        <li className="station__contact-list-item station__contact-list-item--address">
                          {
                            station.meta.contact.address.split(',').map((line, index) => (
                              <span key={index}>
                                {line}
                                <br />
                              </span>
                            ))
                          }
                        </li>
                        <li className="station__contact-list-item station__contact-list-item--phone">
                          <a href={`tel:${station.meta.contact.phone}`}>
                            {station.meta.contact.phone}
                          </a>
                        </li>
                      </ul>
                    </div>
                  )
                }
                {
                  nothingToDisplay && (
                    <div className="station__nothing">
                      {contentNoInformationAvailable}
                    </div>
                  )
                }
              </div>
            )
          }
        </>
      </PageMain>
    </div>
  );
}

export default ViewStation;

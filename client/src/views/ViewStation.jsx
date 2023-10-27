import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  useFetchStationsQuery,
} from '@api/stationsApi';

import {
  contentNoInformationAvailable,
} from '@constants/textContent';

import buildPageTitle from '@utils/buildPageTitle';

import Box from '@components/Box';
import Error from '@components/Error';
import Interchanges from '@components/Interchanges';
import Loading from '@components/Loading';
import PageMain from '@components/PageMain';

function ViewStation() {
  const { id } = useParams();

  const {
    data: station,
    error,
    isLoading,
  } = useFetchStationsQuery(id);

  const location = useLocation();

  useEffect(() => {
    if (!station) return;
    document.title = station && buildPageTitle(station.name);
  }, [ location, station ]);

  const hasContact = station && Object.keys(station.meta.contact).length;
  const hasDisruptions = station && station.disruptions.length;
  const hasFacilities = station && Object.keys(station.meta.facilities).length;
  const hasZone = station && station.meta.zone;
  const nothingToDisplay = !hasContact && !hasFacilities && !hasZone;

  return (
    <div className="view view--station h-100">
      <PageMain>
        {
          error && (
            <Error
              message={error.data.message}
              status={error.status}
            />
          )
        }
        {
          isLoading && (
            <Loading />
          )
        }
        {
          station && (
            <div className="station">
              <h1 className="station__heading">
                {station.name}
              </h1>
              {
                hasZone && (
                  <div className="station__zone">
                    Zone {station.meta.zone}
                  </div>
                )
              }
              {
                !!hasDisruptions && (
                  <div className="station__disruptions">
                    <h2>
                      Station Disruptions
                    </h2>
                    <ul className="station__disruptions-list">
                      {
                        station.disruptions.map((disruption, index) => (
                          <li
                            className="station__disruptions-list-item"
                            key={index}
                          >
                            <Box
                              appearance={disruption.appearance}
                            >
                              {disruption.description}
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
                          stationInterchanges={station.interchanges}
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
                    <table className="table">
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
      </PageMain>
    </div>
  );
}

export default ViewStation;

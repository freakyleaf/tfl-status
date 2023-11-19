import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useFetchMapsQuery,
} from '@api/mapsApi';

import {
  PATH_STATION,
} from '@constants/paths';

import serviceGroups, {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '@constants/serviceGroups';

import {
  STATUS_DESCRIPTION_CLOSED,
  STATUS_DESCRIPTION_PART_CLOSURE,
  STATUS_DESCRIPTION_PART_SUSPENDED,
  STATUS_DESCRIPTION_PLANNED_CLOSURE,
  STATUS_DESCRIPTION_SUSPENDED,
} from '@constants/statusDescriptions';

import {
  contentMapServiceClosedFull,
  contentMapServiceClosedHalf,
  contentMapServiceSuspendedFull,
  contentMapServiceSuspendedHalf,
  contentMapStationServiceSuspendedFull,
  contentMapStationServiceSuspendedHalf,
  contentServiceMultipleRoutes,
} from '@constants/text';

import {
  TIMING_CONSTANT,
} from '@constants/time';

import {
  setMapVisibilityItem,
} from '@stores/storeSliceSettings';

import serviceStatusIncludes from '@utils/serviceStatusIncludes';
import stringToKebabCase from '@utils/stringToKebabCase';

import Alert from '@components/Alert';
import Box from '@components/Box';
import Error from '@components/Error';
import Interchanges from '@components/Interchanges';
import Loading from '@components/Loading';
import MapIconInternationalRail from '@components/icons/MapIconInternationalRail';
import MapIconNationalRail from '@components/icons/MapIconNationalRail';
import MapIconWarning from '@components/icons/MapIconWarning';
import Select from '@components/Select';
import ToggleSwitch from '@components/ToggleSwitch';

Map.propTypes = {
  service: PropTypes.object,
};

function Map(props) {
  const {
    service,
  } = props;

  const {
    data: maps,
    error,
    isFetching,
  } = useFetchMapsQuery(service);

  const dispatch = useDispatch();
  const [ currentRoute, setCurrentRoute ] = useState();
  const [ mapLoading, setMapLoading ] = useState();
  const { mapVisibility } = useSelector((state) => state.settings);

  const serviceHasMultipleRoutes = maps?.length > 1;

  const serviceStatusClosed = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_CLOSED });
  const serviceStatusPartClosure = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_PART_CLOSURE });
  const serviceStatusPartSuspended = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_PART_SUSPENDED });
  const serviceStatusPlannedClosure = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_PLANNED_CLOSURE });
  const serviceStatusSuspended = serviceStatusIncludes({ service, statusDescription: STATUS_DESCRIPTION_SUSPENDED });

  const serviceDisabled = serviceStatusClosed || serviceStatusPlannedClosure || serviceStatusSuspended;
  const serviceInterrupted = serviceDisabled || serviceStatusPartClosure || serviceStatusPartSuspended;

  const contentServiceInterrupted = () => {
    if (serviceStatusClosed || serviceStatusPlannedClosure) return contentMapServiceClosedFull;
    if (serviceStatusPartClosure) return contentMapServiceClosedHalf;
    if (serviceStatusPartSuspended) return contentMapServiceSuspendedHalf;
    if (serviceStatusSuspended) return contentMapServiceSuspendedFull;
  };

  useEffect(() => {
    setMapLoading(true);
  }, [ service ]);

  useEffect(() => {
    if (!maps) return;

    setCurrentRoute(maps[0]);
    setMapLoading(false);
  }, [ maps ]);

  const isLoading = isFetching || mapLoading;

  const mapStationListItemClasses = (station) => {
    const classes = [ 'map__station-list-item' ];
    if (station.currentStationSuspendedFull) classes.push('map__station-list-item--service-suspended-full');
    if (station.currentStationSuspendedHalf) classes.push('map__station-list-item--service-suspended-half');
    if (station.nextStationSuspendedFull) classes.push('map__station-list-item--next-station-suspended-full');
    if (station.nextStationSuspendedHalf) classes.push('map__station-list-item--next-station-suspended-half');
    if (station.previousStationSuspendedFull) classes.push('map__station-list-item--previous-station-suspended-full');
    if (station.previousStationSuspendedHalf) classes.push('map__station-list-item--previous-station-suspended-half');
    return classes.join(' ');
  };

  const hasMapZone = (zone) => {
    return zone !== 'None';
  };

  const stationInterchanges = (station) => {
    return station.interchanges.filter((interchange) => mapVisibility[interchange.group]);
  };

  const stationHasInternationalRailInterchange = (station) => {
    return [
      'Ashford International',
      'Ebbsfleet International',
      'King\'s Cross & St Pancras International',
      'Stratford International',
    ].includes(station.name); // Totally taking liberties here :)
  };

  const stationHasNationalRailInterchange = (station) => {
    return station.interchanges.some((interchange) => interchange.group === SERVICE_GROUP_NATIONAL_RAIL);
  };

  // The `setTimeout()` isn't required but makes for better UX as when changing routes it can seem as if nothing has happened if the routes begin with the same stations
  const onChangeSelect = (event) => {
    setMapLoading(true);
    setTimeout(() => {
      setCurrentRoute(maps.find((route) => route.name === event.target.value));
      setMapLoading(false);
    }, TIMING_CONSTANT / 4);
  };

  const onChangeToggleSwitch = ({ checked, value }) => {
    dispatch(setMapVisibilityItem({
      id: value,
      visible: checked,
    }));
  };

  return (
    <div className='map'>
      <h2>
        Map
      </h2>
      {
        error && (
          <Error
            message={error.data.message}
            status={error.status}
          />
        )
      }
      {
        !error && (
          <>
            {
              serviceHasMultipleRoutes && (
                <>
                  <Alert
                    text={contentServiceMultipleRoutes}
                    type="info"
                  />
                  <Select
                    id="map-route"
                    items={maps}
                    label="Select a route"
                    onChange={(event) => onChangeSelect(event)}
                  />
                </>
              )
            }
            <div className="map__toggles">
              <span className="label">
                Toggle station interchange visibility
              </span>
              <ul className="map__toggles-list">
                {
                  serviceGroups.map((serviceGroup) => (
                    <li
                      className="map__toggles-list-item"
                      key={serviceGroup.group}
                    >
                      <ToggleSwitch
                        checked={!!mapVisibility[serviceGroup.group]}
                        id={serviceGroup.group}
                        label={<><span className="visually-hidden">Toggle visibility for </span>{serviceGroup.name} services</>}
                        onChange={({ checked, value }) => onChangeToggleSwitch({ checked, value })}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className={serviceDisabled ? 'map__diagram map__diagram--service-disabled' : 'map__diagram'}>
              {
                isLoading && (<Loading />)
              }
              {
                !isLoading && (
                  <>
                    {
                      serviceInterrupted && (
                        <>
                          {
                            currentRoute.message && (
                              <Alert
                                text="Real-time map data is currently in beta and may be incorrect."
                                type="info"
                              />
                            )
                          }
                          <Box
                            type="information"
                          >
                            {currentRoute.message ? currentRoute.message : contentServiceInterrupted()}
                          </Box>
                        </>
                      )
                    }
                    <div className="map__route">
                      <ul className="map__zone-list">
                        {
                          currentRoute && currentRoute.zones.map((zone, zoneIndex) => (
                            <li
                              aria-labelledby={hasMapZone(zone.zone.zones) ? stringToKebabCase(`zone-${zone.zone.zones}-index-${zoneIndex}`) : null}
                              className="map__zone-list-item"
                              key={`${zone.zone.zones}-${zoneIndex}`}
                            >
                              {
                                hasMapZone(zone.zone.zones) && (
                                  <div className="map__zone">
                                    <span
                                      className="map__zone-text"
                                      id={stringToKebabCase(`zone-${zone.zone.zones}-index-${zoneIndex}`)}
                                    >
                                      {zone.zone.multiple ? 'Zones' : 'Zone'} {zone.zone.zones}
                                    </span>
                                  </div>
                                )
                              }
                              <ul className="map__station-list">
                                {
                                  zone.stations.map((station, stationIndex) => (
                                    <li
                                      className={mapStationListItemClasses(station)}
                                      key={`${station.id}-${stationIndex}`}
                                    >
                                      <div className="map__ornaments">
                                        <div className={`map__line brand-background--id-${service.id} brand-background--mode-${service.mode}`}>
                                          {
                                            ((zoneIndex === 0 && stationIndex === 0) || (zoneIndex === currentRoute.zones.length - 1 && stationIndex === zone.stations.length - 1)) && (<div className="map__mask" />)
                                          }
                                        </div>
                                        <div className={`map__marker ${(stationInterchanges(station).length || stationHasNationalRailInterchange(station) || stationHasInternationalRailInterchange(station)) ? 'map__marker--interchange' : `map__marker--regular brand-background--id-${service.id} brand-background--mode-${service.mode}`}`} />
                                      </div>
                                      <div className="map__station">
                                        <Link
                                          className="map__station-link"
                                          id={`station-${station.id}`}
                                          to={`/${PATH_STATION}/${station.naptanId}`}
                                        >
                                          {station.name}
                                          {
                                            (station.isSuspendedFull || station.isSuspendedHalf) && (
                                              <span className="visually-hidden">
                                                {
                                                  station.isSuspendedFull && contentMapStationServiceSuspendedFull
                                                }
                                                {
                                                  station.isSuspendedHalf && contentMapStationServiceSuspendedHalf
                                                }
                                              </span>
                                            )
                                          }
                                        </Link>
                                        {
                                          station.hasDisruption && (<MapIconWarning />)
                                        }
                                        {
                                          stationHasNationalRailInterchange(station) && (<MapIconNationalRail />)
                                        }
                                        {
                                          stationHasInternationalRailInterchange(station) && (<MapIconInternationalRail />)
                                        }
                                      </div>
                                      <div className="map__interchanges">
                                        {
                                          !!station.interchanges.length && (
                                            <Interchanges
                                              station={station}
                                              stationInterchanges={stationInterchanges(station)}
                                            />
                                          )
                                        }
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </>
                )
              }
            </div>
          </>
        )
      }
    </div>
  );
}

export default Map;

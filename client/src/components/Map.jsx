import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useFetchMapsQuery,
} from '@api/mapsApi';

import {
  ACCESSIBLE_PLATFORM,
  ACCESSIBLE_TRAIN,
} from '@constants/accessibility';

import {
  PATH_STATION,
} from '@constants/paths';

import {
  SERVICE_MODE_EUROSTAR,
} from '@constants/serviceModes';

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
  contentMapStationHasDisruptions,
  contentMapStationServiceSuspendedFull,
  contentMapStationServiceSuspendedHalf,
  contentServiceMultipleRoutes,
} from '@constants/text';

import {
  TIMING_CONSTANT,
} from '@constants/time';

import {
  setCurrentMapRoute,
} from '@stores/storeSliceSettings';

import getScreenReaderLineName from '@utils/getScreenReaderLineName';
import {
  stationHasEmbellishmentInterchange,
  stationHasNationalRailInterchange,
  stationIsAccessible,
} from '@utils/getStationProperties';
import serviceStatusIncludes from '@utils/serviceStatusIncludes';
import stringToKebabCase from '@utils/stringToKebabCase';

import Alert from '@components/Alert';
import Box from '@components/Box';
import Collapsible from '@components/Collapsible';
import Error from '@components/Error';
import Interchanges from '@components/Interchanges';
import Loading from '@components/Loading';
import StationIconAccessibility from '@components/icons/StationIconAccessibility';
import MapSettings from '@components/MapSettings';
import Select from '@components/Select';
import StationIcons from '@components/StationIcons';

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
  const [ mapSettingsVisibility, setMapSettingsVisibility ] = useState(false);
  const {
    currentMapRoutes,
    mapVisibilityInterchanges,
    mapVisibilityStepFreeAccess,
  } = useSelector((state) => state.settings);

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

  const getCurrentMapRoute = () => {
    if (currentMapRoutes[service.id]) {
      return maps.find((route) => route.name === currentMapRoutes[service.id]);
    }
    return maps[0];
  };

  const stationInterchanges = (station) => {
    return station.interchanges.filter((interchange) => mapVisibilityInterchanges[interchange.group]);
  };

  useEffect(() => {
    setMapLoading(true);
  }, [ service ]);

  useEffect(() => {
    if (!maps) return;

    setCurrentRoute(getCurrentMapRoute());
    setMapLoading(false);
  }, [ maps ]);

  const isLoading = isFetching || mapLoading;

  const getStationNumber = (stationName) => {
    const stationIndex = currentRoute.stations.findIndex((station) => station.name === stationName);
    return `Station ${stationIndex + 1} of ${currentRoute.stations.length}:`;
  };

  const hasMapZone = (zone) => {
    return zone !== 'None';
  };

  const mapMarkerClasses = (station) => {
    const classes = [ 'map__marker' ];

    if (mapVisibilityStepFreeAccess && station.accessibility === ACCESSIBLE_PLATFORM) {
      classes.push('map__marker--accessibility map__marker--accessibility-platform');
    }
    else if (mapVisibilityStepFreeAccess && station.accessibility === ACCESSIBLE_TRAIN) {
      classes.push('map__marker--accessibility map__marker--accessibility-train');
    }
    else if (stationInterchanges(station).length || stationHasNationalRailInterchange(station) || stationHasEmbellishmentInterchange(station, SERVICE_MODE_EUROSTAR)) {
      classes.push('map__marker--interchange');
    }
    else {
      classes.push('map__marker--regular');
    }

    classes.push(`brand-background--id-${service.id} brand-background--mode-${service.mode}`);
    return classes.join(' ');
  };

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

  const screenReaderFriendlyZone = (zone) => {
    return zone.replace('/', ' slash ');
  };

  const stationIsSuspendedFull = (station) => {
    return station.currentStationSuspendedFull || station.nextStationSuspendedFull || station.previousStationSuspendedFull;
  };

  const stationIsSuspendedHalf = (station) => {
    return station.currentStationSuspendedHalf || station.nextStationSuspendedHalf || station.previousStationSuspendedHalf;
  };

  const stationIsSuspended = (station) => {
    return stationIsSuspendedFull(station) || stationIsSuspendedHalf(station);
  };

  // The `setTimeout()` isn't required but makes for better UX as when changing routes it can seem as if nothing has happened if the routes begin with the same stations
  const onChangeSelect = (event) => {
    dispatch(setCurrentMapRoute({
      id: service.id,
      map: event.target.value,
    }));
    setMapLoading(true);
    setTimeout(() => {
      setCurrentRoute(maps.find((route) => route.name === event.target.value));
      setMapLoading(false);
    }, TIMING_CONSTANT / 4);
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
            <div className="map__settings">
              <Collapsible
                a11yHelperText="map settings"
                collapsed={!mapSettingsVisibility}
                heading="Map Settings"
                onClick={() => setMapSettingsVisibility(!mapSettingsVisibility)}
              />
              {
                mapSettingsVisibility && (<MapSettings />)
              }
            </div>
            {
              !isLoading && serviceHasMultipleRoutes && (
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
                    value={getCurrentMapRoute().name}
                  />
                </>
              )
            }

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
                            currentRoute?.message && (
                              <Alert
                                text="Real-time map data is currently in beta and may be incorrect."
                                type="info"
                              />
                            )
                          }
                          <Box
                            type="information"
                          >
                            {currentRoute?.message ? currentRoute.message : contentServiceInterrupted()}
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
                                            ((zoneIndex === 0 && stationIndex === 0) || (zoneIndex === currentRoute.zones.length - 1 && stationIndex === zone.stations.length - 1)) && (
                                              <div className="map__mask" />
                                            )
                                          }
                                        </div>
                                        <div className={mapMarkerClasses(station)}>
                                          {
                                            (mapVisibilityStepFreeAccess && stationIsAccessible(station)) && (<StationIconAccessibility />)
                                          }
                                        </div>
                                      </div>
                                      <div className="map__station">
                                        <Link
                                          className="map__station-link"
                                          to={`/${PATH_STATION}/${station.topMostParentId}`}
                                        >
                                          <span className="visually-hidden">{getStationNumber(station.name)}</span>
                                          <span id={`station-${station.id}`}>{station.name}</span>
                                          <span className="visually-hidden">
                                            . This station is in fare {zone.zone.multiple ? 'zones' : 'zone'} {screenReaderFriendlyZone(zone.zone.zones)}
                                            {
                                              stationIsAccessible(station) && (
                                                <>. The {getScreenReaderLineName({ mode: service.mode, name: service.name })} has step-free access from street to {station.accessibility} at this station.</>
                                              )
                                            }
                                            {
                                              !stationIsAccessible(station) && (
                                                <>. The {getScreenReaderLineName({ mode: service.mode, name: service.name })} does not have step-free access at this station.</>
                                              )
                                            }
                                          .</span>
                                          {
                                            (stationIsSuspended(station)) && (
                                              <span className="visually-hidden">
                                                {
                                                  stationIsSuspendedFull(station) && contentMapStationServiceSuspendedFull
                                                }
                                                {
                                                  stationIsSuspendedHalf(station) && contentMapStationServiceSuspendedHalf
                                                }
                                              </span>
                                            )
                                          }
                                          <StationIcons
                                            station={station}
                                          />
                                          {
                                            station.hasDisruptions && (
                                              <span className="visually-hidden">
                                                {contentMapStationHasDisruptions}
                                              </span>
                                            )
                                          }
                                        </Link>
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

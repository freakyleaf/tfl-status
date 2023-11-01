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
  contentServiceMultipleRoutes,
} from '@constants/text';

import {
  TIMING_CONSTANT,
} from '@constants/time';

import {
  setMapVisibilityItem,
} from '@stores/storeSliceSettings';

import stringToKebabCase from '@utils/stringToKebabCase';

import Alert from '@components/Alert';
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
  } = useFetchMapsQuery(service.id);

  const dispatch = useDispatch();
  const [ currentRoute, setCurrentRoute ] = useState();
  const [ mapLoading, setMapLoading ] = useState();
  const { mapVisibility } = useSelector((state) => state.settings);

  const serviceHasMultipleRoutes = maps?.length > 1;

  useEffect(() => {
    setMapLoading(true);
  }, [ service ]);

  useEffect(() => {
    if (!maps) return;

    setCurrentRoute(maps[0]);
    setMapLoading(false);
  }, [ maps ]);

  const isLoading = isFetching || mapLoading;

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

  // This isn't required but makes for better UX as when changing routes it can seem as if nothing has happened if the routes begin with the same stations
  const onChangeSelect = (event) => {
    setMapLoading(true);
    setTimeout(() => {
      setCurrentRoute(maps.find((route) => route.name === event.target.value));
      setMapLoading(false);
    }, TIMING_CONSTANT / 2);
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

            <div className="map__diagram">
              {
                isLoading && (
                  <Loading />
                )
              }
              {
                !isLoading && (
                  <ul className="map__zone-list">
                    {
                      currentRoute && currentRoute.zones.map((zone, index) => (
                        <li
                          aria-labelledby={hasMapZone(zone.zone.zones) ? stringToKebabCase(`zone-${zone.zone.zones}-index-${index}`) : null}
                          className="map__zone-list-item"
                          key={`${zone.zone.zones}-${index}`}
                        >
                          {
                            hasMapZone(zone.zone.zones) && (
                              <div className="map__zone">
                                <span
                                  className="map__zone-text"
                                  id={stringToKebabCase(`zone-${zone.zone.zones}-index-${index}`)}
                                >
                                  {zone.zone.multiple ? 'Zones' : 'Zone'} {zone.zone.zones}
                                </span>
                              </div>
                            )
                          }
                          <ul className="map__station-list">
                            {
                              zone.stations.map((station, index) => (
                                <li
                                  className="map__station-list-item"
                                  key={`${station.id}-${index}`}
                                >
                                  <div className="map__ornaments">
                                    <div className={`map__line brand-background--id-${service.id} brand-background--mode-${service.mode}`} />
                                    <div className={`map__marker ${(stationInterchanges(station).length || stationHasNationalRailInterchange(station) || stationHasInternationalRailInterchange(station)) ? 'map__marker--interchange' : `map__marker--regular map__line brand-background--id-${service.id} brand-background--mode-${service.mode}`}`} />
                                  </div>
                                  <div className="map__station">
                                    <Link
                                      className="map__station-link"
                                      id={`station-${station.id}`}
                                      to={`/${PATH_STATION}/${station.naptanId}`}
                                    >
                                      {station.name}
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

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PATH_STATION,
} from '@constants/paths';

import serviceGroups, { SERVICE_GROUP_NATIONAL_RAIL } from '@constants/serviceGroups';

import {
  useFetchLinesQuery,
} from '@api/linesApi';

import {
  setLine,
} from '@stores/storeSliceLines';

import {
  setMapVisibilityItem,
} from '@stores/storeSliceSettings';

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
    data,
    error,
    isLoading,
  } = useFetchLinesQuery(service.id);

  const dispatch = useDispatch();
  const { mapVisibility } = useSelector((state) => state.settings);
  const routes = useSelector((state) => state.lines.lines[service.id]);
  const [ currentRoute, setCurrentRoute ] = useState();
  const [ mapLoading, setMapLoading ] = useState();

  const lineHasMultipleRoutes = routes && routes.length > 1;

  useEffect(() => {
    setMapLoading(true);
  }, [ service ]);

  useEffect(() => {
    if (!routes) return;

    setCurrentRoute(routes[0]);
    setMapLoading(false);
  }, [ routes ]);

  useEffect(() => {
    if (!data) return;

    dispatch(setLine({
      data,
      id: service.id,
    }));
  }, [ data ]);

  const loading = isLoading || mapLoading;

  const stationInterchanges = (station) => {
    return station.interchanges.filter((interchange) => mapVisibility[interchange.group]);
  };

  const stationHasInternationalRailInterchange = (station) => {
    return [
      'King\'s Cross & St Pancras International',
      'Stratford International', // More 'HS1' than 'International' but TfL doesn't even mark this as a National Rail station so am taking liberties :)
    ].includes(station.name);
  };

  const stationHasNationalRailInterchange = (station) => {
    return station.interchanges.some((interchange) => interchange.group === SERVICE_GROUP_NATIONAL_RAIL);
  };

  const onChange = ({ checked, value }) => {
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
              !loading && (
                <>
                  {
                    lineHasMultipleRoutes && (
                      <>
                        <Alert
                          text="This line has multiple routes. Please select a route below to view a map."
                          type="info"
                        />
                        <Select
                          id="map-route"
                          items={routes}
                          label="Select a route"
                          onChange={(event) => {
                            setCurrentRoute(routes.find((route) => route.name === event.target.value));
                          }}
                        />
                      </>
                    )
                  }
                  <div className="map__toggles">
                    <label
                      className="label"
                      htmlFor="map-toggle"
                    >
                      Toggle station interchange visibility
                    </label>
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
                              onChange={({ checked, value }) => onChange({ checked, value })}
                            />
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </>
              )
            }
            <div className="map__diagram">
              {
                loading && (
                  <Loading />
                )
              }
              {
                !loading && (
                  <ul className="map__list">
                    {currentRoute && currentRoute.stations.map((station, index) => (
                      <li
                        className="map__list-item"
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
                            station.hasDisruption && (
                              <MapIconWarning />
                            )
                          }
                          {
                            stationHasNationalRailInterchange(station) && (
                              <MapIconNationalRail />
                            )
                          }
                          {
                            stationHasInternationalRailInterchange(station) && (
                              <MapIconInternationalRail />
                            )
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

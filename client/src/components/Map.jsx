import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  VIEW_MODE_TUBE,
} from '@constants/viewModes';

import {
  useFetchLinesQuery,
} from '@api/linesApi';

import {
  setLine,
} from '@stores/storeSliceLines';

import Alert from '@components/Alert';
import Error from '@components/Error';
import Loading from '@components/Loading';
import MapIconInternationalRail from '@components/icons/MapIconInternationalRail';
import MapIconNationalRail from '@components/icons/MapIconNationalRail';
import Select from '@components/Select';

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

  const stationHasInternationalRailInterchange = (station) => {
    return [
      'King\'s Cross & St Pancras International',
      'Stratford International',
    ].includes(station.name);
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
              !loading && lineHasMultipleRoutes && (
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
                        key={`${station.name}-${index}`}
                      >
                        <div className="map__ornaments">
                          <div className={`map__line brand-background--id-${service.id} brand-background--mode-${service.mode}`} />
                          <div className={`map__marker ${(station.interchanges.length || station.hasNationalRailInterchange || stationHasInternationalRailInterchange(station)) ? 'map__marker--interchange' : `map__marker--regular map__line brand-background--id-${service.id} brand-background--mode-${service.mode}`}`} />
                        </div>
                        <div className="map__station">
                          <span className="map__name">
                            <span className="visually-hidden">
                              Station stop:
                            </span>
                            {station.name}
                          </span>
                          {
                            station.hasNationalRailInterchange && (
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
                              <>
                                <span className="visually-hidden">
                                  {station.name} interchanges:
                                </span>
                                <ul className="map__interchanges-list">
                                  {station.interchanges.map((interchange) => (
                                    <li
                                      className="map__interchanges-list-item"
                                      key={interchange.id}
                                    >
                                      <div className={`map__interchange brand-background--id-${interchange.id}`}>
                                        <Link
                                          className="map__link"
                                          to={`/service/${interchange.id}`}
                                        >
                                          <span className="visually-hidden">
                                            View the
                                          </span>
                                          {interchange.name}
                                          <span className="visually-hidden">
                                            {
                                              interchange.mode === VIEW_MODE_TUBE && (
                                                <>line</>
                                              )
                                            }
                                            service page
                                          </span>
                                        </Link>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </>
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

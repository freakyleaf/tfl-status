import PropTypes from 'prop-types';
import React from 'react';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '@constants/serviceGroups';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_BUS,
  SERVICE_MODE_COACH,
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_RIVER_BUS,
} from '@constants/serviceModes';

import MapKeyStation from '@components/MapKeyStation';
import StationIconAeroplane from '@components/icons/StationIconAeroplane';
import StationIconBus from '@components/icons/StationIconBus';
import StationIconCoach from '@components/icons/StationIconCoach';
import StationIconEurostar from '@components/icons/StationIconEurostar';
import StationIconNationalRail from '@components/icons/StationIconNationalRail';
import StationIconBoat from '@components/icons/StationIconBoat';
import StationIconWarning from '@components/icons/StationIconWarning';

MapKey.propTypes = {
  id: PropTypes.string,
  maps: PropTypes.array,
  mode: PropTypes.string,
};

function MapKey(props) {
  const {
    id,
    maps,
    mode,
  } = props;

  const stations = maps.flatMap((map) => map.stations.map((station) => {
    return {
      accessibility: !!station.accessibility,
      bulletins: !!station.hasBulletins,
      interchanges: station.interchanges.flatMap((interchange) => {
        if (interchange.group === SERVICE_GROUP_EXTRA) {
          return interchange.lines.map((line) => line.mode);
        } else {
          return interchange.group;
        }
      }),
    };
  }));

  const platform = () => {
    if (mode === SERVICE_MODE_RIVER_BUS) return 'pier';
    return 'platform';
  };

  const showAccessibility = () => {
    return stations.some((station) => station.accessibility);
  };

  const showBulletins = () => {
    return stations.some((station) => station.bulletins);
  };

  const showInterchange = (interchangeType) => {
    return stations.some((station) => station.interchanges.includes(interchangeType));
  };

  const showInterchangeAirport = () => {
    return showInterchange(SERVICE_MODE_AEROPLANE);
  };

  const showInterchangeBus = () => {
    return showInterchange(SERVICE_GROUP_BUS);
  };

  const showInterchangeCoach = () => {
    return showInterchange(SERVICE_MODE_COACH);
  };

  const showInterchangeEurostar = () => {
    return showInterchange(SERVICE_MODE_EUROSTAR);
  };

  const showInterchangeNationalRail = () => {
    return showInterchange(SERVICE_GROUP_NATIONAL_RAIL);
  };

  const showInterchangeRiverBus = () => {
    return showInterchange(SERVICE_GROUP_RIVER_BUS);
  };

  const stop = () => {
    if (mode === SERVICE_MODE_BUS) return 'Bus stop';
    if (mode === SERVICE_MODE_RIVER_BUS) return 'Pier';
    return 'Station';
  };

  const vehicle = () => {
    if (mode === SERVICE_MODE_RIVER_BUS) return 'River Bus';
    return 'train';
  };

  return (
    <div className="map-key">
      <table className="map-key__table table">
        <thead className="visually-hidden">
          <tr>
            <th>Item</th>
            <th className="w-100">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="map-key__table-row">
            <td>
              <MapKeyStation
                id={id}
                interchangeType="regular"
                mode={mode}
              />
            </td>
            <td>
              {stop()} without interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <MapKeyStation
                id={id}
                interchangeType="interchange"
                mode={mode}
              />
            </td>
            <td>
              {stop()} with interchanges
            </td>
          </tr>
          {
            showAccessibility() && (
              <>
                <tr className="map-key__table-row">
                  <td>
                    <MapKeyStation
                      id={id}
                      interchangeType="accessibility-platform"
                      mode={mode}
                    />
                  </td>
                  <td>
                    {stop()} with partial accessibility (step-free access from street to {platform()})
                  </td>
                </tr>
                <tr className="map-key__table-row">
                  <td>
                    <MapKeyStation
                      id={id}
                      interchangeType="accessibility-train"
                      mode={mode}
                    />
                  </td>
                  <td>
                    {stop()} with full accessibility (step-free access from street to {vehicle()})
                  </td>
                </tr>
              </>
            )
          }
          {
            showBulletins() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconWarning />
                  </span>
                </td>
                <td>
                  {stop()} with bulletins
                </td>
              </tr>
            )
          }
          {
            showInterchangeNationalRail() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconNationalRail />
                  </span>
                </td>
                <td>
                  {stop()} with National Rail interchanges
                </td>
              </tr>
            )
          }
          {
            showInterchangeBus() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconBus />
                  </span>
                </td>
                <td>
                  {stop()} with TfL bus service interchanges
                </td>
              </tr>
            )
          }
          {
            showInterchangeCoach() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconCoach />
                  </span>
                </td>
                <td>
                  {stop()} with coach station interchanges
                </td>
              </tr>
            )
          }
          {
            showInterchangeRiverBus() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconBoat />
                  </span>
                </td>
                <td>
                  {stop()} with River Bus interchanges
                </td>
              </tr>
            )
          }
          {
            showInterchangeAirport() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconAeroplane />
                  </span>
                </td>
                <td>
                  {stop()} with airport interchanges
                </td>
              </tr>
            )
          }
          {
            showInterchangeEurostar() && (
              <tr className="map-key__table-row">
                <td>
                  <span className="map-key__icon">
                    <StationIconEurostar />
                  </span>
                </td>
                <td>
                  {stop()} with Eurostar service interchanges
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default MapKey;

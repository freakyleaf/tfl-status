import PropTypes from 'prop-types';
import React from 'react';

import {
  SERVICE_MODE_BUS,
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
  mode: PropTypes.string,
};

function MapKey(props) {
  const {
    id,
    mode,
  } = props;

  const station = () => {
    if (mode === SERVICE_MODE_BUS) return 'Bus stop';
    if (mode === SERVICE_MODE_RIVER_BUS) return 'River Bus pier';
    return 'Station';
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
              {station()} without interchanges
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
              {station()} with interchanges
            </td>
          </tr>
          {
            mode !== SERVICE_MODE_BUS && (
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
                    {station()} with step-free access from street to platform
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
                    {station()} with step-free access from street to train
                  </td>
                </tr>
              </>
            )
          }
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconWarning />
              </span>
            </td>
            <td>
              {station()} with disruptions
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconNationalRail />
              </span>
            </td>
            <td>
              {station()} with National Rail interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconBus />
              </span>
            </td>
            <td>
              {station()} with TfL bus service interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconCoach />
              </span>
            </td>
            <td>
              {station()} with coach station interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconBoat />
              </span>
            </td>
            <td>
              {station()} with River Bus interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconAeroplane />
              </span>
            </td>
            <td>
              {station()} with airport interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconEurostar />
              </span>
            </td>
            <td>
              {station()} with Eurostar service interchanges
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MapKey;

import PropTypes from 'prop-types';
import React from 'react';

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

  return (
    <div className="map-key">
      <table className="map-key__table table">
        <thead>
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
              Station without interchanges
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
              Station with interchanges
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <MapKeyStation
                id={id}
                interchangeType="accessibility-platform"
                mode={mode}
              />
            </td>
            <td>
              Station with step-free access from street to platform
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
              Station with step-free access from street to train
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconWarning />
              </span>
            </td>
            <td>
              Station with disruptions
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconNationalRail />
              </span>
            </td>
            <td>
              Station with a National Rail interchange
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconBus />
              </span>
            </td>
            <td>
              Station with a TfL bus service interchange
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconAeroplane />
              </span>
            </td>
            <td>
              Station with an airport interchange
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconCoach />
              </span>
            </td>
            <td>
              Station with a coach station interchange
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconEurostar />
              </span>
            </td>
            <td>
              Station with a Eurostar service interchange
            </td>
          </tr>
          <tr className="map-key__table-row">
            <td>
              <span className="map-key__icon">
                <StationIconBoat />
              </span>
            </td>
            <td>
              Station with a river bus interchange
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MapKey;

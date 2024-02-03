import PropTypes from 'prop-types';
import React from 'react';

import StationIconAccessibility from '@components/icons/StationIconAccessibility';

MapKeyStation.propTypes = {
  id: PropTypes.string,
  interchangeType: PropTypes.string,
  mode: PropTypes.string,
};

function MapKeyStation(props) {
  const {
    id,
    interchangeType,
    mode,
  } = props;

  const isAccessibilityStation = [ 'accessibility-platform', 'accessibility-train' ].includes(interchangeType);

  const mapMarkerClasses = () => {
    const mapMarkerClasses = [ 'map__marker' ];
    if (isAccessibilityStation) mapMarkerClasses.push('map__marker--accessibility');

    mapMarkerClasses.push(
      `map__marker--${interchangeType}`,
      `brand-background--id-${id}`,
      `brand-background--mode-${mode}`,
    );

    return mapMarkerClasses.join(' ');
  };

  return (
    <div className="map__route">
      <div className="map__station-list">
        <div className="map__station-list-item">
          <div className="map__ornaments">
            <div className={`map__line brand-background--id-${id} brand-background--mode-${mode}`}></div>
            <div className={mapMarkerClasses()}>
              {
                isAccessibilityStation && (<StationIconAccessibility />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapKeyStation;

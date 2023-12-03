import PropTypes from 'prop-types';
import React from 'react';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_COACH,
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_RIVER_BUS,
} from '@constants/serviceModes';

import {
  stationHasEmbellishmentInterchange,
  stationHasNationalRailInterchange,
} from '@utils/getStationProperties';

import StationIconAeroplane from '@components/icons/StationIconAeroplane';
import StationIconCoach from '@components/icons/StationIconCoach';
import StationIconEurostar from '@components/icons/StationIconEurostar';
import StationIconNationalRail from '@components/icons/StationIconNationalRail';
import StationIconRiver from '@components/icons/StationIconRiver';
import StationIconWarning from '@components/icons/StationIconWarning';

StationIcons.propTypes = {
  station: PropTypes.object.isRequired,
};

function StationIcons(props) {
  const {
    station,
  } = props;

  const stationHasIcons = (station) => {
    return !!stationIcons(station).length;
  };

  const stationIcons = (station) => {
    const icons = [];
    if (station.hasDisruptions) icons.push(<StationIconWarning />);
    if (stationHasNationalRailInterchange(station)) icons.push(<StationIconNationalRail />);
    if (station.embellishments?.interchanges) {
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_AEROPLANE)) icons.push(<StationIconAeroplane />);
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_COACH)) icons.push(<StationIconCoach />);
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_EUROSTAR)) icons.push(<StationIconEurostar />);
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_RIVER_BUS)) icons.push(<StationIconRiver />);
    }
    return icons;
  };

  return (
    <>
      {
        stationHasIcons(station) && (
          <div className="station-icons">
            <ul className="station-icons__list">
              {stationIcons(station).map((icon, iconIndex) => (
                <li
                  className="station-icons__list-item"
                  key={iconIndex}
                >
                  {icon}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
}

export default StationIcons;

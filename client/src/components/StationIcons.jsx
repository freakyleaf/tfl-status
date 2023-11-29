import PropTypes from 'prop-types';
import React from 'react';

import {
  stationHasEmbellishmentAirport,
  stationHasEmbellishmentCoach,
  stationHasEmbellishmentEurostar,
  stationHasEmbellishmentRiver,
  stationHasNationalRailInterchange,
} from '@utils/getStationProperties';

import StationIconAirport from '@components/icons/StationIconAirport';
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
    if (stationHasEmbellishmentAirport(station)) icons.push(<StationIconAirport />);
    if (stationHasEmbellishmentCoach(station)) icons.push(<StationIconCoach />);
    if (stationHasEmbellishmentEurostar(station)) icons.push(<StationIconEurostar />);
    if (stationHasEmbellishmentRiver(station)) icons.push(<StationIconRiver />);
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

import PropTypes from 'prop-types';
import React from 'react';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_COACH,
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_RIVER_BUS,
} from '@constants/serviceModes';

import {
  SERVICE_NAME_AEROPLANE,
  SERVICE_NAME_BUS,
  SERVICE_NAME_COACH,
  SERVICE_NAME_EUROSTAR,
  SERVICE_NAME_NATIONAL_RAIL,
  SERVICE_NAME_RIVER_BUS,
} from '@constants/serviceNames';

import getScreenReaderSpokenArray from '@utils/getScreenReaderSpokenArray';

import {
  stationHasBusInterchange,
  stationHasEmbellishmentInterchange,
  stationHasNationalRailInterchange,
} from '@utils/getStationProperties';

import StationIconAeroplane from '@components/icons/StationIconAeroplane';
import StationIconBus from '@components/icons/StationIconBus';
import StationIconCoach from '@components/icons/StationIconCoach';
import StationIconEurostar from '@components/icons/StationIconEurostar';
import StationIconNationalRail from '@components/icons/StationIconNationalRail';
import StationIconBoat from '@components/icons/StationIconBoat';
import StationIconWarning from '@components/icons/StationIconWarning';

StationIcons.propTypes = {
  station: PropTypes.object.isRequired,
};

function StationIcons(props) {
  const {
    station,
  } = props;

  const stationHasIcons = (station) => {
    return !!stationIconInterchanges(station).icons.length;
  };

  const stationIconInterchanges = (station) => {
    const icons = [];
    const text = [];

    if (station.hasDisruptions) icons.push(<StationIconWarning />);
    if (stationHasNationalRailInterchange(station)) {
      icons.push(<StationIconNationalRail />);
      text.push(SERVICE_NAME_NATIONAL_RAIL);
    }
    if (stationHasBusInterchange(station)) {
      icons.push(<StationIconBus />);
      text.push(SERVICE_NAME_BUS);
    }
    if (station.embellishments?.interchanges) {
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_AEROPLANE)) {
        icons.push(<StationIconAeroplane />);
        text.push(SERVICE_NAME_AEROPLANE);
      }
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_COACH)) {
        icons.push(<StationIconCoach />);
        text.push(SERVICE_NAME_COACH);
      }
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_EUROSTAR)) {
        icons.push(<StationIconEurostar />);
        text.push(SERVICE_NAME_EUROSTAR);
      }
      if (stationHasEmbellishmentInterchange(station, SERVICE_MODE_RIVER_BUS)) {
        icons.push(<StationIconBoat />);
        text.push(SERVICE_NAME_RIVER_BUS);
      }
    }
    return {
      icons,
      text,
    };
  };

  return (
    <>
      {
        stationHasIcons(station) && (
          <div className="station-icons">
            <ul className="station-icons__list">
              {stationIconInterchanges(station).icons.map((icon, iconIndex) => (
                <li
                  className="station-icons__list-item"
                  key={iconIndex}
                >
                  {icon}
                </li>
              ))}
            </ul>
            <span className="visually-hidden">
              This station has {getScreenReaderSpokenArray(stationIconInterchanges(station).text)} interchanges.
            </span>
          </div>
        )
      }
    </>
  );
}

export default StationIcons;

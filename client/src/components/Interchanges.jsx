import PropTypes from 'prop-types';
import React from 'react';

import serviceGroups, { SERVICE_GROUP_EXTRA } from '@constants/serviceGroups';
import { SERVICE_MODE_AIRPORT_CONNECTION } from '@constants/serviceModes';

import Interchange from '@components/Interchange';
import StationIconAeroplane from '@components/icons/StationIconAeroplane';

Interchanges.propTypes = {
  station: PropTypes.object.isRequired,
  stationInterchanges: PropTypes.array.isRequired,
};

function Interchanges(props) {
  const {
    station,
    stationInterchanges: stationInterchangesRaw,
  } = props;

  const stationInterchanges = stationInterchangesRaw?.map((stationInterchangeRaw) => {
    return {
      ...stationInterchangeRaw,
      path: serviceGroups.find((serviceGroup) => serviceGroup.group === stationInterchangeRaw.group)?.path,
    };
  });

  const stationInterchangesAirportConnection = stationInterchanges?.filter((stationInterchange) => stationInterchange.group === SERVICE_GROUP_EXTRA).find((stationInterchange) => stationInterchange.lines.find((line) => line.mode === SERVICE_MODE_AIRPORT_CONNECTION))?.lines[0];

  return (
    <div className="interchanges">
      <ul
        aria-labelledby={station.id ? `station-${station.id}` : null}
        className="interchanges__list"
      >
        {
          stationInterchanges.filter((stationInterchange) => stationInterchange.group !== SERVICE_GROUP_EXTRA).map((stationInterchange, index) => (
            <li
              className={`interchanges__list-item interchanges__list-item--${stationInterchange.group}`}
              key={`${stationInterchange.group}-${index}`}
            >
              <Interchange
                station={station}
                stationInterchange={stationInterchange}
              />
            </li>
          ))
        }
        {
          stationInterchangesAirportConnection && (
            <li className="interchanges__list-item interchanges__list-item--extra">
              <ul className="interchange__lines-list">
                {
                  stationInterchangesAirportConnection.labels.map((label) => (
                    <li
                      className="interchange__lines-list-item"
                      key={label.text}
                    >
                      <div className="interchange__line">
                        <div className="interchange__link">
                          <div className="interchange__text high-contrast-mode-text">
                            <span>
                              <span className="interchange__icon">
                                <StationIconAeroplane />
                              </span>
                              {label.text}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Interchanges;

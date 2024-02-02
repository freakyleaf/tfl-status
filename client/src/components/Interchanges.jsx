import PropTypes from 'prop-types';
import React from 'react';

import serviceGroups, { SERVICE_GROUP_EXTRA, SERVICE_GROUP_INFO } from '@constants/serviceGroups';
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

  const stationInterchangesInfo = stationInterchanges?.find((stationInterchange) => stationInterchange.group === SERVICE_GROUP_INFO);
  const stationInterchangesLines = stationInterchanges.filter((stationInterchange) => ![ SERVICE_GROUP_EXTRA, SERVICE_GROUP_INFO ].includes(stationInterchange.group));

  return (
    <div className="interchanges">
      <ul
        aria-labelledby={station.id ? `station-${station.id}` : null}
        className="interchanges__list"
      >
        {
          stationInterchangesLines.map((stationInterchange, index) => (
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
          stationInterchangesInfo?.lines.map((line, index) => (
            <li
              className="interchanges__list-item interchanges__list-item--info"
              key={index}
            >
              <ul className="interchange__lines-list">
                {
                  line.labels.map((label) => (
                    <li
                      className="interchange__lines-list-item"
                      key={label.text}
                    >
                      <div className="interchange__line">
                        <div className="interchange__link">
                          <div className="interchange__text high-contrast-mode-text">
                            <span>
                              {
                                line.mode === SERVICE_MODE_AIRPORT_CONNECTION && (
                                  <>
                                    <span className="interchange__icon">
                                      <StationIconAeroplane />
                                    </span>
                                    Trains to {label.text}
                                  </>
                                )
                              }
                              {
                                line.mode !== SERVICE_MODE_AIRPORT_CONNECTION && (
                                  <>
                                    {label.text}
                                  </>
                                )
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Interchanges;

import PropTypes from 'prop-types';
import React from 'react';

import serviceGroups from '@constants/serviceGroups';

import Interchange from '@components/Interchange';

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

  return (
    <div className="interchanges">
      <ul
        aria-labelledby={station.id ? `station-${station.id}` : null}
        className="interchanges__list"
      >
        {
          stationInterchanges.map((stationInterchange, index) => (
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
      </ul>
    </div>
  );
}

export default Interchanges;

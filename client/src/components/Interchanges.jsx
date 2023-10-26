import PropTypes from 'prop-types';
import React from 'react';

import Interchange from '@components/Interchange';

Interchanges.propTypes = {
  station: PropTypes.object.isRequired,
  stationInterchanges: PropTypes.array.isRequired,
};

function Interchanges(props) {
  const {
    station,
    stationInterchanges,
  } = props;

  return (
    <div className="interchanges">
      <ul
        aria-labelledby={station.id ? `station-${station.id}` : null}
        className="interchanges__list"
      >
        {
          stationInterchanges.map((stationInterchange) => (
            <li
              className="interchanges__list-item"
              key={stationInterchange.group}
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

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import {
  PATH_SERVICE,
} from '@constants/paths';

import {
  VIEW_MODE_BUS,
  VIEW_MODE_TUBE,
} from '@constants/viewModes';

import getPretty from '@utils/getPretty';

Interchanges.propTypes = {
  station: PropTypes.object.isRequired,
  stationInterchange: PropTypes.object.isRequired,
};

function Interchanges(props) {
  const {
    station,
    stationInterchange,
  } = props;

  return (
    <div className="interchange">
      <span className="visually-hidden">
        {getPretty(stationInterchange.group)} interchanges for {station.name}:
      </span>
      <ul className="interchange__lines-list">
        {
          stationInterchange.lines.map((line) => (
            <li
              className="interchange__lines-list-item"
              key={line.id}
            >
              <div className={`interchange__line brand-background--id-${line.id} brand-background--mode-${line.mode}`}>
                <Link
                  className="interchange__link"
                  to={`${stationInterchange.path}/${PATH_SERVICE}/${line.id}`}
                >
                  <span className="visually-hidden">
                    View the
                  </span>
                  <span className="interchange__text high-contrast-mode-text">
                    {line.name}
                  </span>
                  <span className="visually-hidden">
                    {
                      line.mode === VIEW_MODE_TUBE && (<> line </>)
                    }
                    {
                      line.mode === VIEW_MODE_BUS && (<> bus </>)
                    }
                    service page
                  </span>
                </Link>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Interchanges;

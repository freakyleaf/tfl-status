import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import {
  PATH_SERVICE,
} from '@constants/paths';

import {
  SERVICE_GROUP_CORE,
} from '@constants/serviceGroups';

import getPretty from '@utils/getPretty';
import getScreenReaderLineName from '@utils/getScreenReaderLineName';

import StationIconAccessibility from '@components/icons/StationIconAccessibility';

Interchanges.propTypes = {
  station: PropTypes.object.isRequired,
  stationInterchange: PropTypes.object.isRequired,
};

function Interchanges(props) {
  const {
    station,
    stationInterchange,
  } = props;

  const isMapInterchange = () => {
    // Maps use a string
    return typeof station.accessibility === 'string';
  };

  const lineDoesNotHaveAccessibilityInterchanges = ({ line, stationInterchange }) => {
    return !lineHasAccessibilityInterchanges(line.id) && !isMapInterchange() && !stationInterchange.isEmbellishment && stationInterchange.group === SERVICE_GROUP_CORE;
  };

  const lineHasAccessibilityInterchanges = (lineId) => {
    if (!station.accessibility) return false;
    if (isMapInterchange()) return false; // We don't show step-free access for map interchanges
    // Individual services use an array
    return station.accessibility.some((service) => service.id === lineId);
  };

  const lineAccessibilityInterchanges = (lineId) => {
    const services = station.accessibility.filter((service) => service.id === lineId); // We need to `filter()` instead of `find()` as some stations include both 'platform' and 'train' for the same service (such as Elizabeth Line at Liverpool Street and Paddington)
    return services.map((service) => service.access);
  };

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
              <div className={`interchange__line brand-background--id-${line.id} brand-background--mode-${line.mode} brand-border--id-${line.id} brand-border--mode-${line.mode}`}>
                <Link
                  className="interchange__link"
                  to={`${stationInterchange.path}/${PATH_SERVICE}/${line.id}`}
                >
                  <div className="interchange__text high-contrast-mode-text">
                    <span className="visually-hidden">
                      Station interchange:
                    </span>
                    {line.name}
                    <span className="visually-hidden">
                      . View the {getScreenReaderLineName({ mode: line.mode, name: line.name })} service page.
                    </span>
                    {
                      line.labels && line.labels.map((label) => (
                        <span
                          className="interchange__label"
                          key={label.text}
                        >
                          <span className="visually-hidden">
                            Interchange station name:
                          </span>
                          {label.text}
                          {
                            label.distance && (
                              <>
                                <span className="visually-hidden">, about </span>
                                {` ${label.distance.toString()}`}
                                <span aria-hidden="true">m</span>
                                <span className="visually-hidden"> metres away.</span>
                              </>
                            )
                          }
                        </span>
                      ))
                    }
                  </div>
                  {
                    lineHasAccessibilityInterchanges(line.id) && (
                      <ul className="interchange__accessibility-list">
                        {
                          lineAccessibilityInterchanges(line.id).map((accessibilityInterchange) => (
                            <li
                              className="interchange__accessibility-list-item"
                              key={accessibilityInterchange}
                            >
                              <div className={`interchange__accessibility-icon interchange__accessibility-icon--${accessibilityInterchange}`}>
                                <StationIconAccessibility />
                              </div>
                              <span className="visually-hidden">
                                The {getScreenReaderLineName({ mode: line.mode, name: line.name })} at {station.name} has step-free access from street to {accessibilityInterchange}.
                              </span>
                            </li>
                          ))
                        }
                      </ul>
                    )
                  }
                  {
                    lineDoesNotHaveAccessibilityInterchanges({ line, stationInterchange }) && (
                      <span className="visually-hidden">
                        The {getScreenReaderLineName({ mode: line.mode, name: line.name })} at {station.name} does not have step-free access.
                      </span>
                    )
                  }
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

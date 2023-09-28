import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconCircleCheck from '@components/icons/IconCircleCheck';
import IconCircleExclamation from '@components/icons/IconCircleExclamation';

Status.propTypes = {
  service: PropTypes.object.isRequired,
};

function Status(props) {
  const {
    service,
  } = props;

  return (
    <div className="status">
      <ul className="status__list">
        {
          service.lineStatuses.map((lineStatus) => {
            return (
              <li
                className={`status__list-item ${lineStatus.statusSeverity === 10 ? 'status__list-item--positive' : 'status__list-item--negative'}`}
                key={lineStatus.statusSeverityDescription}
              >
                <Icon
                  className="status__icon"
                  icon={lineStatus.statusSeverity === 10 ? <IconCircleCheck /> : <IconCircleExclamation />}
                />
                <span className="status__text">
                  {lineStatus.statusSeverityDescription}
                </span>
                <span className="visually-hidden">
                  on the {service.name}
                  {
                    service.modeName === 'tube' && (' line.')
                  }
                  {
                    (service.modeName === 'overground' || service.modeName === 'tram') && (' network.')
                  }
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Status;

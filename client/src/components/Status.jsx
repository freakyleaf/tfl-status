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
          service.statusesConformed.map((status) => {
            return (
              <li
                className={`status__list-item ${status.severity === 10 ? 'status__list-item--positive' : 'status__list-item--negative'}`}
                key={status.description}
              >
                <Icon
                  className="status__icon"
                  icon={status.severity === 10 ? <IconCircleCheck /> : <IconCircleExclamation />}
                />
                <span className="status__text">
                  {status.description}
                </span>
                <span className="visually-hidden">
                  on the {service.name}
                  {
                    service.mode === 'tube' && (' line.')
                  }
                  {
                    (service.mode === 'overground' || service.mode === 'tram') && (' network.')
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

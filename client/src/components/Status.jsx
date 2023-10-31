import PropTypes from 'prop-types';
import React from 'react';

import {
  SERVICE_MODE_BUS,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TRAM,
  SERVICE_MODE_TUBE,
} from '@constants/serviceModes';

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
          service.statusesConformed.map((status) => (
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
                on
                {
                  service.mode !== SERVICE_MODE_NATIONAL_RAIL && ('the')
                }
                {service.name}
                {
                  service.mode === SERVICE_MODE_BUS && ('route')
                }
                {
                  (service.mode === SERVICE_MODE_OVERGROUND || service.mode === SERVICE_MODE_TRAM) && ('network')
                }
                {
                  service.mode === SERVICE_MODE_TUBE && ('line')
                }
                .
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Status;

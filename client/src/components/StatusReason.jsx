import PropTypes from 'prop-types';
import React from 'react';

StatusReason.propTypes = {
  service: PropTypes.object.isRequired,
};

function StatusReason(props) {
  const {
    service,
  } = props;

  return (
    service.lineStatuses[0].reason && (
      <div className="status-reason">
        <div className="box">
          {service.lineStatuses[0].reason}
        </div>
      </div>
    )
  );
}

export default StatusReason;

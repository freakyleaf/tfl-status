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
    <>
      {
        service.lineStatusesConformed.some((lineStatus) => lineStatus.reason.length) && (
          <div className="status-reason">
            {
              service.lineStatusesConformed.map((lineStatus) => {
                return (
                  lineStatus.reason.map((reason) => {
                    return (
                      <div className="box" key={reason}>
                        <p className="status-reason__text">
                          {reason.trim()}
                        </p>
                      </div>
                    );
                  })
                );
              })
            }
          </div>
        )
      }
    </>
  );
}

export default StatusReason;

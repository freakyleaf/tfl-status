import PropTypes from 'prop-types';
import React from 'react';

import isUrl from '@utils/isUrl';

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
                        <span className="status-reason__text">
                          {
                            isUrl(reason.trim()) ? (
                              <>
                                For more information see <a
                                  className="status-reason__link"
                                  href={reason.trim()}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  <span className="word-break-all">
                                    {reason.trim()}
                                  </span>
                                </a>.
                              </>
                            ) : reason.trim()
                          }
                        </span>
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

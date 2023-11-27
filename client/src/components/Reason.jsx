import PropTypes from 'prop-types';
import React from 'react';

import isUrl from '@utils/isUrl';

Reason.propTypes = {
  service: PropTypes.object.isRequired,
};

function Reason(props) {
  const {
    service,
  } = props;

  return (
    <>
      {
        !!service.reasonsConformed.length && (
          <div className="reason">
            <ul className="reason__list">
              {
                service.reasonsConformed.map((reason) => (
                  <li
                    className="reason__list-item box"
                    key={reason}
                  >
                    <span className="reason__text">
                      {
                        isUrl(reason) ? (
                          <>
                            For more information see <a
                              className="reason__link"
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
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </>
  );
}

export default Reason;

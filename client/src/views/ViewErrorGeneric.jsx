import PropTypes from 'prop-types';
import React from 'react';

import PageMain from '@components/PageMain';

ViewErrorGeneric.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

function ViewErrorGeneric(props) {
  const {
    error,
  } = props;

  const errorMessage = typeof error === 'object' ? error.message : error;

  return (
    <div className="view view--error h-100 pt-global">
      <PageMain>
        <div className="error h-100">
          <h1>Error</h1>
          <p>{errorMessage}</p>
        </div>
      </PageMain>
    </div>
  );
}

export default ViewErrorGeneric;

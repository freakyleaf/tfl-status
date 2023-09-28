import PropTypes from 'prop-types';
import React from 'react';

import Alert from '@components/Alert';

Error.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

function Error(props) {
  const {
    message,
    status,
  } = props;

  return (
    <Alert
      type="error"
      text={`${status}: ${message}`}
    />
  );
}

export default Error;

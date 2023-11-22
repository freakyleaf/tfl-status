import PropTypes from 'prop-types';
import React from 'react';

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'error',
    'info',
  ]).isRequired,
};

function Alert(props) {
  const {
    text,
    type,
  } = props;

  return (
    <div className={`alert alert--${type}`}>
      {text}
    </div>
  );
}

export default Alert;

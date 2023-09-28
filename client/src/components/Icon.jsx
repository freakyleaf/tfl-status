import PropTypes from 'prop-types';
import React from 'react';

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired,
};

Icon.defaultProps = {
  className: '',
};

function Icon(props) {
  const {
    className,
    icon,
  } = props;

  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`.trim()}
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  );
}

export default Icon;

import PropTypes from 'prop-types';
import React from 'react';

IconArrow.propTypes = {
  direction: PropTypes.oneOf([
    'left',
    'right',
    'up',
    'down',
  ]).isRequired,
};

function IconArrow(props) {
  const {
    direction,
  } = props;

  const rotation = () => {
    switch (direction) {
    case 'left':
      return '180';
    case 'right':
      return '0';
    case 'up':
      return '-90';
    case 'down':
      return '90';
    default:
      return '0';
    }
  };

  return (
    <>
      <path
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        style={{
          transform: `rotate(${rotation()}deg)`,
          transformOrigin: 'center',
        }}
      />
    </>
  );
}

export default IconArrow;

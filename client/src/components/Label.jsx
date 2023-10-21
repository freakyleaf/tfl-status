import propTypes from 'prop-types';
import React from 'react';

Label.propTypes = {
  id: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

function Label(props) {
  const {
    id,
    text,
  } = props;

  return (
    <label
      className="label"
      htmlFor={id}
    >
      {text}
    </label>
  );
}

export default Label;

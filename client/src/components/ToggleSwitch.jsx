import PropTypes from 'prop-types';
import React from 'react';

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

function ToggleSwitch(props) {
  const {
    checked,
    id,
    label,
    onChange,
  } = props;

  const handleOnChange = (event) => {
    const { checked, value } = event.target;
    onChange({ checked, value });
  };

  return (
    <div className="toggle-switch">
      <input
        checked={checked}
        className="toggle-switch__input"
        id={`service-${id}`}
        onChange={handleOnChange}
        role="switch"
        type="checkbox"
        value={id}
      />
      <label
        className="toggle-switch__label"
        htmlFor={`service-${id}`}
      >
        {label}
      </label>
    </div>
  );
}

export default ToggleSwitch;

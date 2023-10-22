import propTypes from 'prop-types';
import React from 'react';

import Label from '@components/Label';

Select.propTypes = {
  id: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

function Select(props) {
  const {
    id,
    items,
    label,
    onChange,
  } = props;

  return (
    <>
      <Label
        id={id}
        text={label}
      />
      <select
        className="select"
        id={id}
        onChange={onChange}
      >
        {items.map((item) => (
          <option
            className="option"
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;

import propTypes from 'prop-types';
import React from 'react';

import Label from '@components/Label';

Select.propTypes = {
  id: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

function Select(props) {
  const {
    id,
    items,
    label,
    onChange,
    value,
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
        value={value}
      >
        {items.map((item, index) => (
          <option
            className="option"
            key={`${item.id}-${index}`} // We can't rely on `item.id` being unique as some services return the same `item.id` value for multiple routes
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

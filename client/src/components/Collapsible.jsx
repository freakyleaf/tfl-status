import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';

Collapsible.propTypes = {
  a11yHelperText: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Collapsible(props) {
  const {
    a11yHelperText,
    collapsed,
    disabled,
    heading,
    onClick,
  } = props;
  return (
    <div
      className={`collapsible ${disabled ? 'disabled' : 'clickable'}`}
      onClick={onClick}
    >
      <h3 className="collapsible__heading">
        {heading}
      </h3>
      <button className="button button--icon">
        <span className="visually-hidden">
          {collapsed ? 'Show' : 'Hide'} {a11yHelperText}
        </span>
        <Icon
          icon={collapsed ? <IconCirclePlus /> : <IconCircleMinus />}
        />
      </button>
    </div>
  );
}

export default Collapsible;

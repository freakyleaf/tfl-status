import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';

Collapsible.propTypes = {
  a11yHelperText: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Collapsible(props) {
  const {
    a11yHelperText,
    collapsed,
    heading,
    onClick,
  } = props;
  return (
    <div
      className="collapsible clickable"
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

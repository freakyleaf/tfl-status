import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import React from 'react';

import Hr from '@components/Hr';
import Icon from '@components/Icon';
import IconArrow from '@components/icons/IconArrow';

BackTo.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function BackTo(props) {
  const {
    name,
    path,
  } = props;

  return (
    <div className="back-to">
      <Hr />
      <NavLink
        className="back-to__link"
        to={path}
      >
        <Icon
          className="back-to__icon"
          icon={<IconArrow direction="left" />}
        />
        <span className="back-to__text">
          Back to {name}
        </span>
      </NavLink>
    </div>
  );
}

export default BackTo;

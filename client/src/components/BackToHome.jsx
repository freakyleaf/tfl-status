import { NavLink } from 'react-router-dom';
import React from 'react';

import Hr from '@components/Hr';
import Icon from '@components/Icon';
import IconArrow from '@components/icons/IconArrow';

function BackToHome() {
  return (
    <div className="back-to-home">
      <Hr />
      <NavLink
        className="back-to-home__link"
        to="/"
      >
        <Icon
          className="back-to-home__icon"
          icon={<IconArrow direction="left" />}
        />
        <span className="back-to-home__text">
          Back to home
        </span>
      </NavLink>
    </div>
  );
}

export default BackToHome;

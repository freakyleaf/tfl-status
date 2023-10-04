import { NavLink } from 'react-router-dom';
import React from 'react';

import Icon from '@components/Icon';
import IconGear from '@components/icons/IconGear';

function NavigationFooter() {
  return (
    <nav className="navigation-primary navigation-primary--footer">
      <ul className="navigation-primary__list">
        <li className="navigation-primary__list-item">
          <NavLink
            className="navigation-primary__link"
            to="/settings"
          >
            <Icon
              className="navigation-primary__icon"
              icon={<IconGear />}
            />
            <span className="navigation-primary__text">
              Settings
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationFooter;

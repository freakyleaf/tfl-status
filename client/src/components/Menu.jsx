import { NavLink } from 'react-router-dom';
import React from 'react';

import { PATH_ABOUT } from '@constants/paths';
import serviceGroups from '@constants/serviceGroups';

function Menu() {
  return (
    <nav className="menu">
      <h2 className="menu__heading">
        Services
      </h2>
      <ul className="menu__list">
        {
          serviceGroups.map((serviceGroup) => (
            <li
              className="menu__list-item"
              key={serviceGroup.name}
            >
              <NavLink
                className="menu__link"
                to={serviceGroup.path}
              >
                {serviceGroup.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <h2 className="menu__heading mt-global">
        Other
      </h2>
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink
            className="menu__link"
            to={PATH_ABOUT}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

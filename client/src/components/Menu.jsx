import { NavLink } from 'react-router-dom';
import React from 'react';

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
    </nav>
  );
}

export default Menu;

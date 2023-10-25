import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import menuItems from '@constants/menuItems';

import {
  PATH_SERVICE,
} from '@constants/paths';

import Collapsible from '@components/Collapsible';

NavigationMenu.propTypes = {
  services: PropTypes.object.isRequired,
};

function NavigationMenu(props) {
  const {
    services,
  } = props;

  const hasServices = !!Object.keys(services).length;

  const [ menuItemVisibility, setMenuItemVisibility ] = useState({});

  const handleClick = (menuItem) => () => {
    setMenuItemVisibility({
      ...menuItemVisibility,
      [menuItem]: !menuItemVisibility[menuItem],
    });
  };

  return (
    <nav className="navigation-menu">
      <h2 className="navigation-menu__heading">
        {
          hasServices ? 'All Services': 'Navigation'
        }
      </h2>
      <ul className="navigation-menu__list navigation-menu__list--all-services">
        {
          !hasServices && (
            <li className="navigation-menu__list-item">
              <NavLink
                className="navigation-menu__link"
                to="/"
              >
                Home
              </NavLink>
            </li>
          )
        }
        {
          hasServices && menuItems.map((menuItem) => (
            <li
              className="navigation-menu__list-item"
              key={services[menuItem].name}
            >
              <NavLink
                className="navigation-menu__link"
                to={services[menuItem].path}
              >
                {services[menuItem].name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <h2 className="mt-global">
        Individual Services
      </h2>
      <ul className="navigation-menu__list navigation-menu__list--individual-services">
        {
          menuItems.map((menuItem) => (
            <li
              className="navigation-menu__list-item"
              key={services[menuItem].name}
            >
              <Collapsible
                a11yHelperText={`individual ${services[menuItem].name} services`}
                collapsed={!menuItemVisibility[menuItem]}
                heading={services[menuItem].name}
                onClick={handleClick(menuItem)}
              />
              {
                menuItemVisibility[menuItem] && (
                  <ul className="navigation-menu__list">
                    {
                      services[menuItem].modes.map((mode) => (
                        <li
                          className="navigation-menu__list-item"
                          key={mode.name}
                        >
                          <NavLink
                            className="navigation-menu__link"
                            to={`${services[menuItem].path}/${PATH_SERVICE}/${mode.id}`}
                          >
                            {mode.name}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default NavigationMenu;

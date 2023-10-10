import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '@constants/serviceGroups';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';

NavigationMenu.propTypes = {
  services: PropTypes.object.isRequired,
};

function NavigationMenu(props) {
  const {
    services,
  } = props;

  const menuItems = [
    SERVICE_GROUP_CORE,
    SERVICE_GROUP_BUS,
    SERVICE_GROUP_NATIONAL_RAIL,
  ];

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
              key={services[menuItem].namePretty}
            >
              <NavLink
                className="navigation-menu__link"
                to={services[menuItem].path}
              >
                {services[menuItem].namePretty}
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
              key={services[menuItem].namePretty}
            >
              <div
                className="navigation-menu__collapsible clickable"
                onClick={handleClick(menuItem)}
              >
                <h3 className="navigation-menu__subheading">
                  {services[menuItem].namePretty}
                </h3>
                <button className="button button--icon">
                  <span className="visually-hidden">
                    {menuItemVisibility[menuItem] ? 'Hide' : 'Show'} individual {services[menuItem].namePretty} services
                  </span>
                  <Icon
                    icon={menuItemVisibility[menuItem] ? <IconCircleMinus /> : <IconCirclePlus />}
                  />
                </button>
              </div>
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
                            to={`${menuItem === SERVICE_GROUP_CORE ? '' : services[menuItem].path}/service/${mode.id}`}
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

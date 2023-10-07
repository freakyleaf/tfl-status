import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import {
  PATH_BUS,
  PATH_HOME,
  PATH_NATIONAL_RAIL,
} from '@constants/paths';

NavigationMenu.propTypes = {
  services: PropTypes.array.isRequired,
};

function NavigationMenu(props) {
  const {
    services,
  } = props;

  return (
    <nav className="navigation-menu">
      <h2 className="navigation-menu__heading">
        All Services
      </h2>
      <ul className="navigation-menu__list navigation-menu__list--all-services">
        <li className="navigation-menu__list-item">
          <NavLink
            className="navigation-menu__link"
            to={PATH_HOME}
          >
            Home
          </NavLink>
        </li>
        {
          !!services.length && (
            <>
              <li className="navigation-menu__list-item">
                <NavLink
                  className="navigation-menu__link"
                  to={`/${PATH_BUS}`}
                >
                  Bus
                </NavLink>
              </li>
              <li className="navigation-menu__list-item">
                <NavLink
                  className="navigation-menu__link"
                  to={`/${PATH_NATIONAL_RAIL}`}
                >
                  National Rail
                </NavLink>
              </li>
            </>
          )
        }
      </ul>
      {
        !!services.length && (
          <>
            <h2 className="navigation-menu__heading mt-global">
              Individual Services
            </h2>
            <ul className="navigation-menu__list navigation-menu__list--individual-services">
              {
                services.map((service) => {
                  return (
                    <li
                      className="navigation-menu__list-item"
                      key={service.id}
                    >
                      <NavLink
                        className="navigation-menu__link"
                        to={`/service/${service.id}`}
                      >
                        {service.name}
                      </NavLink>
                    </li>
                  );
                })
              }
            </ul>
          </>
        )
      }
    </nav>
  );
}

export default NavigationMenu;

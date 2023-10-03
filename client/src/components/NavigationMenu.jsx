import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

NavigationMenu.propTypes = {
  services: PropTypes.array.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function NavigationMenu(props) {
  const {
    services,
    setMenuOpen,
  } = props;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation-menu">
      <h2 className="navigation-menu__heading">
        Navigation
      </h2>
      <h3 className="navigation-menu__subheading">
        All Services
      </h3>
      <NavLink
        className="navigation-menu__link"
        onClick={closeMenu}
        to="/"
      >
        Home
      </NavLink>
      {
        !!services.length && (
          <>
            <h3 className="navigation-menu__subheading">
              Individual Services
            </h3>
            <ul className="navigation-menu__list">
              <li className="navigation-menu__list-item">
                {
                  services.map((service) => {
                    return (
                      <NavLink
                        className="navigation-menu__link"
                        key={service.id}
                        onClick={closeMenu}
                        to={`/service/${service.id}`}
                      >
                        {service.name}
                      </NavLink>
                    );
                  })
                }
              </li>
            </ul>
          </>
        )
      }
    </nav>
  );
}

export default NavigationMenu;

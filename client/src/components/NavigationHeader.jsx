import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

NavigationHeader.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};

function NavigationHeader(props) {
  const {
    setMenuOpen,
  } = props;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation-header">
      <ul className="navigation-header__list">
        <li className="navigation-header__list-item">
          <NavLink
            className="navigation-header__link"
            onClick={closeMenu}
            to="/"
          >
            TfL Status
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;

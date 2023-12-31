import { NavLink } from 'react-router-dom';
import React from 'react';

function NavigationHeader() {
  return (
    <nav className="navigation-primary navigation-primary--header">
      <ul className="navigation-primary__list">
        <li className="navigation-primary__list-item">
          <NavLink
            className="navigation-primary__link"
            to="/"
          >
            <span className="navigation-primary__text">
              TfL Status
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;

import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconClose from '@components/icons/IconClose';
import IconHamburger from '@components/icons/IconHamburger';
import NavigationHeader from '@components/NavigationHeader';

PageHeader.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function PageHeader(props) {
  const {
    menuOpen,
    setMenuOpen,
  } = props;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page-header container">
      <div className="page-header__content">
        <NavigationHeader
          setMenuOpen={setMenuOpen}
        />
        <button
          className="button button--menu"
          onClick={toggleMenu}
        >
          <div className="button__content">
            <span className="button__text">
              <span className="visually-hidden">
                { menuOpen ? 'Close' : 'Open' }
              </span>
              Menu
            </span>
            <Icon
              className="button__icon"
              icon={menuOpen ? <IconClose /> : <IconHamburger />}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default PageHeader;

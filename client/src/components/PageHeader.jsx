import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMenuOpen,
} from '@stores/storeSliceSettings';

import Icon from '@components/Icon';
import IconClose from '@components/icons/IconClose';
import IconHamburger from '@components/icons/IconHamburger';
import NavigationHeader from '@components/NavigationHeader';

function PageHeader() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.settings.menuOpen);

  const toggleMenu = () => {
    dispatch(setMenuOpen(!menuOpen));
  };

  return (
    <div className="page-header container">
      <div className="page-header__content">
        <NavigationHeader />
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

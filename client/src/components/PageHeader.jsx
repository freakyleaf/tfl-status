import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMenuOpen,
  setSettingsOpen,
} from '@stores/storeSliceSettings';

import Icon from '@components/Icon';
import IconClose from '@components/icons/IconClose';
import IconHamburger from '@components/icons/IconHamburger';
import NavigationHeader from '@components/NavigationHeader';

function PageHeader() {
  const dispatch = useDispatch();
  const {
    menuOpen,
    settingsOpen,
  } = useSelector((state) => state.settings);

  const toggleMenu = () => {
    dispatch(setMenuOpen(!menuOpen));
    if (settingsOpen) dispatch(setSettingsOpen(false));
  };

  return (
    <div className="page-header">
      <div className="page-header__content">
        <NavigationHeader />
        <button
          className="button button--utility"
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
              className="button__icon button__icon--right"
              icon={menuOpen ? <IconClose /> : <IconHamburger />}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default PageHeader;

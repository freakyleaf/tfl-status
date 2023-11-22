import propTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMenuOpen,
  setSettingsOpen,
} from '@stores/storeSliceState';

import Icon from '@components/Icon';
import IconArrow from '@components/icons/IconArrow';
import IconClose from '@components/icons/IconClose';
import IconGear from '@components/icons/IconGear';

PageFooter.propTypes = {
  showBackButton: propTypes.bool,
};

function PageFooter(props) {
  const {
    showBackButton,
  } = props;

  const dispatch = useDispatch();
  const {
    menuOpen,
    settingsOpen,
  } = useSelector((state) => state.state);

  const toggleSettings = () => {
    dispatch(setSettingsOpen(!settingsOpen));
    if (menuOpen) dispatch(setMenuOpen(false));
  };

  return (
    <div className="page-footer">
      <div className="page-footer__content">
        {
          showBackButton && (
            <button
              className="button button--utility"
              onClick={() => window.history.back()}
            >
              <div className="button__content">
                <Icon
                  className="button__icon button__icon--left"
                  icon={<IconArrow direction="left" />}
                />
                <span className="button__text">
                  Back
                </span>
              </div>
            </button>
          )
        }
        <button
          className="button button--utility button--settings"
          onClick={toggleSettings}
        >
          <div className="button__content">
            <Icon
              className="button__icon button__icon--left"
              icon={settingsOpen ? <IconClose /> : <IconGear />}
            />
            <span className="button__text">
              <span className="visually-hidden">
                { settingsOpen ? 'Close' : 'Open' }
              </span>
              Settings
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PageFooter;

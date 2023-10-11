import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setThemeApp,
} from '@stores/storeSliceSettings';

import {
  THEME_AUTO,
  THEME_DARK,
  THEME_LIGHT,
} from '@constants/theme';

import Icon from '@components/Icon';
import IconCircleFillEmpty from '@components/icons/IconCircleFillEmpty';
import IconCircleFillFull from '@components/icons/IconCircleFillFull';
import IconCircleFillHalf from '@components/icons/IconCircleFillHalf';

function SettingsThemeSwitch() {
  const dispatch = useDispatch();
  const refMarker = useRef(null);
  const themeApp = useSelector((state) => state.settings.themeApp);

  const onChange = (event) => {
    const { value } = event.target;
    dispatch(setThemeApp(value));
  };

  const setMarkerPosition = () => {
    const index = [ THEME_AUTO, THEME_LIGHT, THEME_DARK ].indexOf(themeApp);
    refMarker.current.style.transform = index > 0 ? `translateX(calc(${index * 100}% + 1px))` : 'translateX(0)';
  };

  useEffect(() => {
    setMarkerPosition();
  }, [ themeApp ]);

  return (
    <div className="settings-theme-switch">
      <ul
        aria-labelledby="settings-theme"
        className="settings-theme-switch__list"
        role="radiogroup"
      >
        <li className="settings-theme-switch__list-item">
          <input
            checked={themeApp === THEME_AUTO}
            className="settings-theme-switch__input"
            id="settings-theme-switch-mode-auto"
            name="settings-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_AUTO}
          />
          <label
            className="settings-theme-switch__label"
            htmlFor="settings-theme-switch-mode-auto"
          >
            <Icon
              className="settings-theme-switch__icon"
              icon={<IconCircleFillHalf />}
            />
            <span className="settings-theme-switch__text">
              Auto <span className="visually-hidden">theme</span>
            </span>
          </label>
          <div
            aria-hidden="true"
            className="settings-theme-switch__marker"
            ref={refMarker}
          />
        </li>
        <li className="settings-theme-switch__list-item">
          <input
            checked={themeApp === THEME_LIGHT}
            className="settings-theme-switch__input"
            id="settings-theme-switch-mode-light"
            name="settings-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_LIGHT}
          />
          <label
            className="settings-theme-switch__label"
            htmlFor="settings-theme-switch-mode-light"
          >
            <Icon
              className="settings-theme-switch__icon"
              icon={<IconCircleFillFull />}
            />
            <span className="settings-theme-switch__text">
              Light <span className="visually-hidden">theme</span>
            </span>
          </label>
        </li>
        <li className="settings-theme-switch__list-item">
          <input
            checked={themeApp === THEME_DARK}
            className="settings-theme-switch__input"
            id="settings-theme-switch-mode-dark"
            name="settings-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_DARK}
          />
          <label
            className="settings-theme-switch__label"
            htmlFor="settings-theme-switch-mode-dark"
          >
            <Icon
              className="settings-theme-switch__icon"
              icon={<IconCircleFillEmpty />}
            />
            <span className="settings-theme-switch__text">
              Dark <span className="visually-hidden">theme</span>
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SettingsThemeSwitch;

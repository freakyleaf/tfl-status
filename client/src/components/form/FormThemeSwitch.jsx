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

function FormSwitch() {
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
    <div className="form-theme-switch">
      <ul className="form-theme-switch__list">
        <li className="form-theme-switch__list-item">
          <input
            checked={themeApp === THEME_AUTO}
            className="form-theme-switch__input"
            id="form-theme-switch-mode-auto"
            name="form-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_AUTO}
          />
          <label
            className="form-theme-switch__label"
            htmlFor="form-theme-switch-mode-auto"
          >
            <Icon
              className="form-theme-switch__icon"
              icon={<IconCircleFillHalf />}
            />
            <span className="form-theme-switch__text">
              Auto <span className="visually-hidden">theme</span>
            </span>
          </label>
          <div
            aria-hidden="true"
            className="form-theme-switch__marker"
            ref={refMarker}
          />
        </li>
        <li className="form-theme-switch__list-item">
          <input
            checked={themeApp === THEME_LIGHT}
            className="form-theme-switch__input"
            id="form-theme-switch-mode-light"
            name="form-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_LIGHT}
          />
          <label
            className="form-theme-switch__label"
            htmlFor="form-theme-switch-mode-light"
          >
            <Icon
              className="form-theme-switch__icon"
              icon={<IconCircleFillFull />}
            />
            <span className="form-theme-switch__text">
              Light <span className="visually-hidden">theme</span>
            </span>
          </label>
        </li>
        <li className="form-theme-switch__list-item">
          <input
            checked={themeApp === THEME_DARK}
            className="form-theme-switch__input"
            id="form-theme-switch-mode-dark"
            name="form-theme-switch"
            onChange={onChange}
            type="radio"
            value={THEME_DARK}
          />
          <label
            className="form-theme-switch__label"
            htmlFor="form-theme-switch-mode-dark"
          >
            <Icon
              className="form-theme-switch__icon"
              icon={<IconCircleFillEmpty />}
            />
            <span className="form-theme-switch__text">
              Dark <span className="visually-hidden">theme</span>
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FormSwitch;

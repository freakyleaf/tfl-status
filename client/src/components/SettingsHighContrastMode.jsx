import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setHighContrastModeEnabled,
} from '@stores/storeSliceSettings';

import ToggleSwitch from '@components/ToggleSwitch';

function SettingsHighContrastMode() {
  const dispatch = useDispatch();
  const { highContrastModeEnabled } = useSelector((state) => state.settings);

  const onChange = ({ checked }) => {
    dispatch(setHighContrastModeEnabled(checked));
  };

  return (
    <div className="settings-high-contrast-mode">
      <ToggleSwitch
        checked={highContrastModeEnabled}
        id="high-contrast-mode"
        label="Toggle high contrast mode"
        onChange={({ checked }) => onChange({ checked })}
      />
    </div>
  );
}

export default SettingsHighContrastMode;

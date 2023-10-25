import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import serviceGroups from '@constants/serviceGroups';

import {
  setMapVisibilityItem,
} from '@stores/storeSliceSettings';

import ToggleSwitch from '@components/ToggleSwitch';

function SettingsMapVisibility() {
  const dispatch = useDispatch();
  const { mapVisibility } = useSelector((state) => state.settings);

  const onChange = ({ checked, value }) => {
    dispatch(setMapVisibilityItem({
      id: value,
      visible: checked,
    }));
  };

  return (
    <ul className="map__toggles-list">
      {
        serviceGroups.map((serviceGroup) => (
          <li
            className="map__toggles-list-item"
            key={serviceGroup.group}
          >
            <ToggleSwitch
              checked={!!mapVisibility[serviceGroup.group]}
              id={serviceGroup.group}
              label={<><span className="visually-hidden">Toggle visibility for </span>{serviceGroup.name} services</>}
              onChange={({ checked, value }) => onChange({ checked, value })}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default SettingsMapVisibility;

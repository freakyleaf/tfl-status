import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import serviceGroups from '@constants/serviceGroups';

import {
  setMapVisibilityInterchangeItem,
  setMapVisibilityStepFreeAccess,
} from '@stores/storeSliceSettings';

import ToggleSwitch from '@components/ToggleSwitch';

function MapSettings() {
  const dispatch = useDispatch();

  const {
    mapVisibilityInterchanges,
    mapVisibilityStepFreeAccess,
  } = useSelector((state) => state.settings);

  const onChangeMapVisibilityStepFreeAccess = ({ checked }) => {
    dispatch(setMapVisibilityStepFreeAccess(checked));
  };

  const onChangeToggleSwitch = ({ checked, value }) => {
    dispatch(setMapVisibilityInterchangeItem({
      id: value,
      visible: checked,
    }));
  };

  return (
    <div className="map-settings">
      <div className="map-settings__toggles">
        <span className="label">
          Toggle station interchange visibility
        </span>
        <ul className="map-settings__toggles-list">
          {
            serviceGroups.map((serviceGroup) => (
              <li
                className="map-settings__toggles-list-item"
                key={serviceGroup.group}
              >
                <ToggleSwitch
                  checked={!!mapVisibilityInterchanges[serviceGroup.group]}
                  id={serviceGroup.group}
                  label={<><span className="visually-hidden">Toggle interchange visibility for </span>{serviceGroup.name} services</>}
                  onChange={({ checked, value }) => onChangeToggleSwitch({ checked, value })}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <ToggleSwitch
        checked={mapVisibilityStepFreeAccess}
        id="map-settings-step-free-access-visibility"
        label="Toggle step-free access visibility"
        onChange={({ checked }) => onChangeMapVisibilityStepFreeAccess({ checked })}
      />
    </div>
  );
}

export default MapSettings;

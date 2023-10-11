import PropTypes from 'prop-types';
import React from 'react';

import SettingsPinned from '@components/SettingsPinned';
import SettingsThemeSwitch from '@components/SettingsThemeSwitch';

Settings.propTypes = {
  services: PropTypes.object.isRequired,
};

function Settings(props) {
  const {
    services,
  } = props;

  return (
    <div className="settings">
      <h2
        className="settings__heading"
        id="settings-theme"
      >
        Theme
      </h2>
      <SettingsThemeSwitch />
      <h2 className="settings__heading">
        Pinned Services
      </h2>
      <SettingsPinned
        services={services}
      />
    </div>
  );
}

export default Settings;

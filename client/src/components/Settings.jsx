import PropTypes from 'prop-types';
import React from 'react';

import {
  contentPinnedItemsSettings,
} from '@constants/textContent';

import Alert from '@components/Alert';
import SettingsPinnedServices from '@components/SettingsPinnedServices';
import SettingsTheme from '@components/SettingsTheme';

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
      <SettingsTheme />
      <h2 className="settings__heading">
        Pinned Services
      </h2>
      <Alert
        text={contentPinnedItemsSettings}
        type="info"
      />
      <SettingsPinnedServices
        services={services}
      />
    </div>
  );
}

export default Settings;

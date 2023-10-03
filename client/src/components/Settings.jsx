import React from 'react';

import FormThemeSwitch from '@components/form/FormThemeSwitch';

function Settings() {
  return (
    <div className="settings">
      <h2 className="settings__heading">
        Settings
      </h2>
      <h3 className="settings__subheading">
        Theme
      </h3>
      <FormThemeSwitch />
    </div>
  );
}

export default Settings;

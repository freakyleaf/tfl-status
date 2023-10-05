import React from 'react';

import FormThemeSwitch from '@components/form/FormThemeSwitch';

function Settings() {
  return (
    <div className="settings">
      <h2
        className="settings__heading"
        id="settings-theme"
      >
        Theme
      </h2>
      <FormThemeSwitch />
    </div>
  );
}

export default Settings;

import React from 'react';

import FormThemeSwitch from '@components/form/FormThemeSwitch';
import BackToHome from '@components/BackToHome';

function Settings() {
  return (
    <div className="settings">
      <h2 className="settings__heading h4">
        Theme
      </h2>
      <FormThemeSwitch />
      <BackToHome />
    </div>
  );
}

export default Settings;

import React from 'react';

import PageMain from '@components/PageMain';
import Settings from '@components/Settings';

function ViewSettings() {
  return (
    <div className="view view--settings h-100">
      <PageMain>
        <div className="settings h-100">
          <h1>Settings</h1>
          <Settings />
        </div>
      </PageMain>
    </div>
  );
}

export default ViewSettings;

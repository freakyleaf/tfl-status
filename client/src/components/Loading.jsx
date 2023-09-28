import React from 'react';

import Icon from '@components/Icon';
import IconLoading from '@components/icons/IconLoading';

function Loading() {
  return (
    <div className="loading">
      <Icon
        className="loading__icon"
        icon={<IconLoading />}
      />
    </div>
  );
}

export default Loading;

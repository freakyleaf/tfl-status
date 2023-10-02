import React from 'react';

import Icon from '@components/Icon';
import IconArrowBarDown from '@components/icons/IconArrowBarDown';

function PullToRefreshMessage() {
  return (
    <div className="pull-to-refresh-message">
      <Icon icon={<IconArrowBarDown />} />
      <span className="pull-to-refresh-message__content">
        Pull to refresh
      </span>
      <Icon icon={<IconArrowBarDown />} />
    </div>
  );
}

export default PullToRefreshMessage;

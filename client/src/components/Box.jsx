import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconCircleClockHistory from '@components/icons/IconCircleClockHistory';
import IconCircleExclamation from '@components/icons/IconCircleExclamation';
import IconCircleInformation from '@components/icons/IconCircleInformation';

Box.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'default',
    'information',
    'plannedwork',
    'realtime',
  ]),
};

Box.defaultProps = {
  type: 'default',
};

function Box(props) {
  const {
    children,
    type,
  } = props;

  const getIcon = () => {
    switch (type) {
    case 'default':
    case 'plannedwork':
      return <IconCircleExclamation />;
    case 'information':
      return <IconCircleInformation />;
    case 'realtime':
      return <IconCircleClockHistory />;
    default:
      return <IconCircleExclamation />;
    }
  };

  return (
    <div className={`box box--${type}`}>
      <div className="box__meta">
        <Icon
          className="box__icon"
          icon={getIcon()}
        />
      </div>
      <div className="box__content">
        {children}
      </div>
    </div>
  );
}

export default Box;

import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@components/Icon';
import IconCircleClockHistory from '@components/icons/IconCircleClockHistory';
import IconCircleExclamation from '@components/icons/IconCircleExclamation';
import IconCircleInformation from '@components/icons/IconCircleInformation';

Box.propTypes = {
  appearance: PropTypes.oneOf([
    'default',
    'information',
    'plannedwork',
    'realtime',
  ]),
  children: PropTypes.node.isRequired,
};

Box.defaultProps = {
  appearance: 'default',
};

function Box(props) {
  const {
    appearance,
    children,
  } = props;

  const getIcon = () => {
    switch (appearance) {
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
    <div className={`box box--${appearance}`}>
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

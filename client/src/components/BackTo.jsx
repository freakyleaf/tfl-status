import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Hr from '@components/Hr';
import Icon from '@components/Icon';
import IconArrow from '@components/icons/IconArrow';

BackTo.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function BackTo(props) {
  const {
    path,
    text,
  } = props;

  return (
    <div className="back-to">
      <Hr />
      <Link
        className="back-to__link"
        to={path}
      >
        <Icon
          className="back-to__icon"
          icon={<IconArrow direction="left" />}
        />
        <span className="back-to__text">
          Back to {text}
        </span>
      </Link>
    </div>
  );
}

export default BackTo;

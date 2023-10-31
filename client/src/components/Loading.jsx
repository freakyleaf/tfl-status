import PropTypes from 'prop-types';
import React from 'react';

import LoadingSpinner from '@components/LoadingSpinner';

Loading.propTypes = {
  global: PropTypes.bool,
};

Loading.defaultProps = {
  global: false,
};

function Loading(props) {
  const {
    global,
  } = props;

  return (
    <div className={`${global ? 'loading loading--global' : 'loading'}`}>
      <LoadingSpinner />
    </div>
  );
}

export default Loading;

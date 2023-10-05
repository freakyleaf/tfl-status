import PropTypes from 'prop-types';
import React from 'react';

PageMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

function PageMain(props) {
  const {
    children,
  } = props;

  return (
    <>
      { children }
    </>
  );
}

export default PageMain;

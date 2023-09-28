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
    <div className="container h-100">
      { children }
    </div>
  );
}

export default PageMain;

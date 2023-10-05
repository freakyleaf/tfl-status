import PropTypes from 'prop-types';
import React from 'react';

PageAside.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

function PageAside(props) {
  const {
    children,
  } = props;

  return (
    <div className="page-aside">
      <div className="page-aside__content">
        {children}
      </div>
    </div>
  );
}

export default PageAside;

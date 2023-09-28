import PropTypes from 'prop-types';
import React from 'react';

import NavigationMenu from '@components/NavigationMenu';

PageAside.propTypes = {
  services: PropTypes.array.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function PageAside(props) {
  const {
    services,
    setMenuOpen,
  } = props;

  return (
    <div className="page-aside container">
      <div className="page-aside__content">
        <NavigationMenu
          services={services}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </div>
  );
}

export default PageAside;

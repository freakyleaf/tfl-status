import PropTypes from 'prop-types';
import React from 'react';

import NavigationMenu from '@components/NavigationMenu';

PageAside.propTypes = {
  services: PropTypes.array.isRequired,
};

function PageAside(props) {
  const {
    services,
  } = props;

  return (
    <div className="page-aside">
      <div className="page-aside__content">
        <NavigationMenu
          services={services}
        />
      </div>
    </div>
  );
}

export default PageAside;

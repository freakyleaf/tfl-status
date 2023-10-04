import React from 'react';

import NavigationFooter from '@components/NavigationFooter';

function PageFooter() {
  return (
    <div className="page-footer container">
      <div className="page-footer__content">
        <span className="page-footer__text">
          &copy; 2023
        </span>
        <NavigationFooter />
      </div>
    </div>
  );
}

export default PageFooter;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageMain from '@components/PageMain';

import buildPageTitle from '@utils/buildPageTitle';

import { contentPleaseUseMenu } from '@constants/textContent';

function ViewErrorPageNotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = buildPageTitle('Error');
  }, [ location ]);

  return (
    <div className="view view--error h-100">
      <PageMain>
        <div className="error h-100">
          <h1>Page Not Found</h1>
          <p>{contentPleaseUseMenu}</p>
        </div>
      </PageMain>
    </div>
  );
}

export default ViewErrorPageNotFound;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { contentPleaseUseMenu } from '@constants/text';

import buildPageTitle from '@utils/buildPageTitle';

import PageMain from '@components/PageMain';

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

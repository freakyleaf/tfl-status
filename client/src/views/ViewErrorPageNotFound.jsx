import React, { useEffect } from 'react';

import PageMain from '@components/PageMain';

import buildPageTitle from '@utils/buildPageTitle';

import { pleaseUseMenu } from '@constants/textContent';

function ViewErrorPageNotFound() {
  useEffect(() => {
    document.title = buildPageTitle('Error');
  }, []);

  return (
    <div className="view view--error h-100">
      <PageMain>
        <div className="error h-100">
          <h1>Page Not Found</h1>
          <p>{pleaseUseMenu}</p>
        </div>
      </PageMain>
    </div>
  );
}

export default ViewErrorPageNotFound;

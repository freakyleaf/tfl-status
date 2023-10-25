import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  contentPinnedItemsAppearEnd,
  contentPinnedItemsAppearStart,
} from '@constants/textContent';

import { useServices } from '@layouts/Layout';

import buildPageTitle from '@utils/buildPageTitle';

import Alert from '@components/Alert';
import BackTo from '@components/BackTo';
import PageMain from '@components/PageMain';
import PinnedSevices from '@components/PinnedServices';

ViewPinned.propTypes = {
  backTo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  serviceGroup: PropTypes.string.isRequired,
};

function ViewPinned(props) {
  const {
    backTo,
    serviceGroup,
  } = props;

  const { services } = useServices();

  const location = useLocation();
  const pageTitle = `Pinned ${services[serviceGroup].name} Services`;

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  return (
    <div className="view view--pinned">
      <PageMain>
        <div className="pinned">
          <h1 className="pinned__heading">
            {pageTitle}
          </h1>
          <Alert
            text={`${contentPinnedItemsAppearStart} ${services[serviceGroup].name} ${contentPinnedItemsAppearEnd}`}
            type="info"
          />
          <PinnedSevices
            services={services[serviceGroup]}
          />
          <BackTo
            path={backTo.path}
            text={backTo.text}
          />
        </div>
      </PageMain>
    </div>
  );
}

export default ViewPinned;

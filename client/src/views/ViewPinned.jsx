import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  useFetchServicesQuery,
} from '@api/servicesApi';

import {
  contentHavingTroubleFetchingData,
  contentPinnedItemsAppearEnd,
  contentPinnedItemsAppearStart,
} from '@constants/text';

import buildPageTitle from '@utils/buildPageTitle';
import getPretty from '@utils/getPretty';

import BackTo from '@components/BackTo';
import Box from '@components/Box';
import Loading from '@components/Loading';
import PageMain from '@components/PageMain';
import PinnedSevices from '@components/PinnedServices';

ViewPinned.propTypes = {
  backTo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  serviceGroup: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
};

function ViewPinned(props) {
  const {
    backTo,
    serviceGroup,
  } = props;

  const {
    data: services,
    error,
    isFetching,
  } = useFetchServicesQuery(serviceGroup);

  if (error) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const location = useLocation();
  const pageTitle = services && `Pinned ${getPretty(serviceGroup)} Services`;

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  return (
    <div className="view view--pinned">
      <PageMain>
        <>
          {
            services && (
              <div className="pinned">
                <h1 className="pinned__heading">
                  {pageTitle}
                </h1>
                <Box
                  type="information"
                >
                  {contentPinnedItemsAppearStart} {getPretty(serviceGroup)} {contentPinnedItemsAppearEnd}
                </Box>
                {
                  isFetching && (<Loading />)
                }
                {
                  services && (
                    <PinnedSevices
                      services={services}
                    />
                  )
                }
                <BackTo
                  path={backTo.path}
                  text={backTo.text}
                />
              </div>
            )
          }
        </>
      </PageMain>
    </div>
  );
}

export default ViewPinned;

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  contentHavingTroubleFetchingData,
} from '@constants/textContent';

import {
  useScrollTo,
  useServices,
} from '@layouts/Layout';

import buildPageTitle from '@utils/buildPageTitle';

import PageMain from '@components/PageMain';
import ServicesTable from '@components/ServicesTable';

ViewServices.propTypes = {
  serviceGroup: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
};

function ViewServices(props) {
  const {
    serviceGroup,
    serviceName,
    viewMode,
  } = props;

  const { pinned } = useSelector((state) => state.settings);
  const { scrollTo } = useScrollTo();
  const { services } = useServices();

  if (!Object.keys(services).length) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const location = useLocation();
  const pageTitle = `${serviceName} Services`;

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  const servicesModes = services[serviceGroup].modes;
  const servicesPinned = servicesModes.filter((serviceMode) => pinned[serviceMode.id]);
  const servicesUnpinned = servicesModes.filter((serviceMode) => !pinned[serviceMode.id]);

  return (
    <div className={`view view--services view--${viewMode} h-100`}>
      <PageMain>
        <div className="services h-100">
          <h1 className="visually-hidden">{pageTitle}</h1>
          {
            !!servicesPinned.length && (
              <>
                <ServicesTable
                  pinned={true}
                  services={services}
                  scrollTo={scrollTo}
                  serviceGroup={serviceGroup}
                  servicesModes={servicesPinned}
                />
                {
                  !!servicesUnpinned.length && (
                    <div className="services__divider" />
                  )
                }
              </>
            )
          }
          {
            !!servicesUnpinned.length && (
              <ServicesTable
                pinned={false}
                services={services}
                scrollTo={scrollTo}
                serviceGroup={serviceGroup}
                servicesModes={servicesUnpinned}
              />
            )
          }
        </div>
      </PageMain>
    </div>
  );
}

export default ViewServices;

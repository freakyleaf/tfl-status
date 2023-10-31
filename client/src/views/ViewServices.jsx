import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  useFetchServicesQuery,
} from '@api/servicesApi';

import {
  contentHavingTroubleFetchingData,
} from '@constants/text';

import {
  useScrollTo,
} from '@layouts/Layout';

import {
  setGlobalLoading,
} from '@stores/storeSliceState';

import buildPageTitle from '@utils/buildPageTitle';
import setView from '@utils/setView';

import PageMain from '@components/PageMain';
import ServicesTable from '@components/ServicesTable';

ViewServices.propTypes = {
  serviceGroup: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
};

function ViewServices(props) {
  const {
    serviceGroup,
    serviceName,
    viewMode,
    viewType,
  } = props;

  const {
    data: services,
    error,
    isFetching,
  } = useFetchServicesQuery(serviceGroup);

  if (error) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const dispatch = useDispatch();
  const location = useLocation();
  const pageTitle = `${serviceName} Services`;
  const { pinned } = useSelector((state) => state.settings);
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    setView({ viewMode, viewType });
  }, []);

  useEffect(() => {
    dispatch(setGlobalLoading(isFetching));
  }, [ isFetching ]);

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  const servicesPinned = services?.filter((serviceMode) => pinned[serviceMode.id]);
  const servicesUnpinned = services?.filter((serviceMode) => !pinned[serviceMode.id]);

  return (
    <div className={`view view--services view--${viewMode} h-100`}>
      <PageMain>
        <>
          {
            services && (
              <div className="services h-100">
                <h1 className="visually-hidden">
                  {pageTitle}
                </h1>
                {
                  !!servicesPinned.length && (
                    <>
                      <ServicesTable
                        pinned={true}
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
                      scrollTo={scrollTo}
                      serviceGroup={serviceGroup}
                      servicesModes={servicesUnpinned}
                    />
                  )
                }
              </div>
            )
          }
        </>
      </PageMain>
    </div>
  );
}

export default ViewServices;

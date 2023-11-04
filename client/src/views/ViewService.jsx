import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  useFetchServicesQuery,
} from '@api/servicesApi';

import {
  PATH_PINNED,
} from '@constants/paths';

import {
  contentHavingTroubleFetchingData,
} from '@constants/text';

import {
  setGlobalLoading,
} from '@stores/storeSliceState';

import buildPageTitle from '@utils/buildPageTitle';
import getPretty from '@utils/getPretty';
import setView from '@utils/setView';

import BackTo from '@components/BackTo';
import Map from '@components/Map';
import PageMain from '@components/PageMain';
import Reason from '@components/Reason';
import Status from '@components/Status';

ViewService.propTypes = {
  backTo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  serviceGroup: PropTypes.string.isRequired,
  serviceGroupPath: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
};

function ViewService(props) {
  const {
    backTo,
    serviceGroup,
    serviceGroupPath,
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
  const { id } = useParams();
  const { pinned } = useSelector((state) => state.settings);
  const service = services?.find((service) => service.id === id);

  useEffect(() => {
    setView({ viewMode, viewType });
  }, []);

  useEffect(() => {
    dispatch(setGlobalLoading(isFetching));
  }, [ isFetching ]);

  useEffect(() => {
    if (!service) return;

    document.title = buildPageTitle(service.name);
  }, [ service ]);

  return (
    <div className="view view--service h-100">
      <PageMain>
        <>
          {
            service && (
              <div className="service">
                <h1 className={`service__heading brand-background--id-${service.id} brand-background--mode-${service.mode}`}>
                  {service.name}
                </h1>
                <Status
                  service={service}
                />
                <Reason
                  service={service}
                />
                <Map
                  service={service}
                />
                <div className="service__pinned-message">
                  This service is {!pinned[service.id] && 'not'} currently pinned to the top of the {getPretty(viewMode)} services page. To view/edit all pinned {getPretty(viewMode)} services <Link to={`${serviceGroupPath}/${PATH_PINNED}`}>click here</Link>.
                </div>
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

export default ViewService;

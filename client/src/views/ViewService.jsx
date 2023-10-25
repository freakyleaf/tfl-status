import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  PATH_PINNED,
} from '@constants/paths';

import { useServices } from '@layouts/Layout';

import buildPageTitle from '@utils/buildPageTitle';

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
};

function ViewService(props) {
  const {
    backTo,
    serviceGroup,
  } = props;

  const { id } = useParams();
  const { pinned } = useSelector((state) => state.settings);

  const { services } = useServices();
  const service = services[serviceGroup].modes.find((service) => service.id === id);

  if (!service) {
    throw new Error(`Service not found: ${id}`);
  }

  const location = useLocation();

  useEffect(() => {
    document.title = buildPageTitle(service.name);
  }, [ location ]);

  return (
    <div className="view view--service h-100">
      <PageMain>
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
            This service is {!pinned[service.id] && 'not'} currently pinned. To view/edit all pinned {services[serviceGroup].name} services <Link to={`${services[serviceGroup].path}/${PATH_PINNED}`}>click here</Link>.
          </div>
          <BackTo
            path={backTo.path}
            text={backTo.text}
          />
        </div>
      </PageMain>
    </div>
  );
}

export default ViewService;

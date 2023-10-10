import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackTo from '@components/BackTo';
import PageMain from '@components/PageMain';
import Reason from '@components/Reason';
import Status from '@components/Status';

import buildPageTitle from '@utils/buildPageTitle';

import { useServices } from '@layouts/Layout';

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
  const { services } = useServices();
  const service = services[serviceGroup].modes.find((service) => service.id === id);

  if (!service) {
    throw new Error(`Service not found: ${id}`);
  }

  useEffect(() => {
    document.title = buildPageTitle(service.name);
  }, [ service ]);

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

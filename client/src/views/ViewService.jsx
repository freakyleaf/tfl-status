import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackTo from '@components/BackTo';
import PageMain from '@components/PageMain';
import Status from '@components/Status';
import StatusReason from '@components/StatusReason';

import buildPageTitle from '@utils/buildPageTitle';

import { useServices } from '@layouts/Layout';

ViewService.propTypes = {
  backTo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

function ViewService(props) {
  const {
    backTo,
  } = props;

  const { id } = useParams();
  const { services } = useServices();
  const service = services.find((service) => service.id === id);

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
          <h1 className={`service__heading brand-background--id-${service.id} brand-background--mode-${service.modeName}`}>
            {service.name}
          </h1>
          <Status
            service={service}
          />
          <StatusReason
            service={service}
          />
          <BackTo
            name={backTo.name}
            path={backTo.path}
          />
        </div>
      </PageMain>
    </div>
  );
}

export default ViewService;

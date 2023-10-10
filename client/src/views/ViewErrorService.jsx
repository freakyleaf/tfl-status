import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useServices } from '@layouts/Layout';

import PageMain from '@components/PageMain';

import buildPageTitle from '@utils/buildPageTitle';
import getSuggested from '@utils/getSuggested';

import {
  contentHavingTroubleFetchingData,
  contentNoSimilarServices,
  contentPleaseUseMenu,
} from '@constants/textContent';

ViewErrorService.propTypes = {
  serviceGroup: PropTypes.string.isRequired,
};

function ViewErrorService(props) {
  const {
    serviceGroup,
  } = props;

  const { id } = useParams();
  const { services } = useServices();
  const serviceIds = services[serviceGroup].modes.map((service) => service.id);
  const path = services[serviceGroup].path === '/' ? '' : services[serviceGroup].path;

  useEffect(() => {
    document.title = buildPageTitle('Error');
  }, []);

  let idx = id;

  // Potential common errors
  if (id === 'elizabeth-line') idx = 'elizabeth';
  if (id === 'hammersmith-and-city') idx = 'hammersmith-city';
  if (id === 'overground') idx = 'london-overground';
  if (id === 'waterloo-and-city') idx = 'waterloo-city';

  const [ suggested, setSuggested ] = useState(null);

  useEffect(() => {
    setSuggested(getSuggested({
      items: serviceIds,
      item: idx,
    }));
  }, [ id ]);

  const hasServices = !!Object.keys(services).length;

  return (
    <div className="view view--error h-100 pt-global">
      <PageMain>
        <div className="error h-100">
          {
            !hasServices && (
              <>
                <h1>Error</h1>
                <p>{contentHavingTroubleFetchingData}</p>
              </>
            )
          }
          {
            !!hasServices && (
              <>
                <h1>Service ID Not Found: {id}</h1>
                {
                  suggested && (
                    <p>Did you mean <NavLink to={`${path}/service/${suggested}`}>{path}/service/{suggested}</NavLink>?</p>
                  )
                }
                {
                  !suggested && (
                    <>
                      <p>{contentNoSimilarServices}</p>
                      <p>{contentPleaseUseMenu}</p>
                    </>
                  )
                }
              </>
            )
          }
        </div>
      </PageMain>
    </div>
  );
}

export default ViewErrorService;

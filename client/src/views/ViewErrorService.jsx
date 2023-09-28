import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useServices } from '@layouts/Layout';

import PageMain from '@components/PageMain';

import buildPageTitle from '@utils/buildPageTitle';
import getSuggested from '@utils/getSuggested';

import {
  havingTroubleFetchingData,
  noSimilarServices,
  pleaseUseMenu,
} from '@constants/textContent';

function ViewErrorService() {
  const { id } = useParams();
  const { services } = useServices();
  const serviceIds = services.map((service) => service.id);

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
      item: idx,
      items: serviceIds,
    }));
  }, [ id ]);

  return (
    <div className="view view--error h-100 pt-global">
      <PageMain>
        <div className="error h-100">
          {
            !services.length && (
              <>
                <h1>Error</h1>
                <p>{havingTroubleFetchingData}</p>
              </>
            )
          }
          {
            !!services.length && (
              <>
                <h1>Service ID Not Found: {id}</h1>
                {
                  suggested && (
                    <p>Did you mean <NavLink to={`/service/${suggested}`}>/service/{suggested}</NavLink>?</p>
                  )
                }
                {
                  !suggested && (
                    <>
                      <p>{noSimilarServices}</p>
                      <p>{pleaseUseMenu}</p>
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
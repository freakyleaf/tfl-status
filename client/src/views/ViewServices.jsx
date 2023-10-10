import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import buildPageTitle from '@utils/buildPageTitle';

import {
  contentHavingTroubleFetchingData,
} from '@constants/textContent';

import {
  useScrollTo,
  useServices,
} from '@layouts/Layout';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';
import PageMain from '@components/PageMain';
import Reason from '@components/Reason';
import Status from '@components/Status';

ViewServices.propTypes = {
  serviceGroup: PropTypes.string.isRequired,
  serviceNamePretty: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
};

function ViewServices(props) {
  const {
    serviceGroup,
    serviceNamePretty,
    viewMode,
  } = props;

  const { scrollTo } = useScrollTo();
  const { services } = useServices();

  if (!Object.keys(services).length) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const pageTitle = `${serviceNamePretty} Services`;

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  const hasReason = (service) => {
    return !!service.reasonsConformed.length;
  };

  const {
    pageMainHeight,
    pageMainScrollTop,
  } = useSelector((state) => state.settings);

  const servicesModes = services[serviceGroup].modes;

  const refServices = useRef(servicesModes.map(() => createRef()));
  const [ activeService, setActiveService ] = useState(null);
  const [ reasonVisibility, setReasonVisibility ] = useState({});

  useEffect(() => {
    if (activeService === null) return;

    const activeServiceHeight = refServices.current[activeService].current.offsetHeight;
    const activeServiceTop = refServices.current[activeService].current.offsetTop;
    const activeServiceBottom = activeServiceHeight + activeServiceTop;

    if (activeServiceHeight <= pageMainHeight) { // The active service fits on the page
      if (activeServiceTop <= pageMainScrollTop) { // The top of the active service is above the top of the page
        scrollTo(activeServiceTop);
      }
      else if (activeServiceBottom > (pageMainHeight + pageMainScrollTop)) { // The bottom of the active service is below the bottom of the page
        scrollTo(activeServiceBottom - pageMainHeight);
      }
    } else { // The active service doesn't fit on the page so we should show as much as possible
      scrollTo(activeServiceTop);
    }
  }, [ activeService ]);

  const handleClick = (serviceId, index) => {
    return () => {
      if (activeService === index) setActiveService(null);

      setReasonVisibility({
        ...reasonVisibility,
        [serviceId]: !reasonVisibility[serviceId],
      });

      setTimeout(() => setActiveService(index), 0);
    };
  };

  return (
    <div className={`view view--services view--${viewMode} h-100`}>
      <PageMain>
        <div className="services h-100">
          <h1 className="visually-hidden">{pageTitle}</h1>
          <table className="services-table">
            <thead className="visually-hidden">
              <tr>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                servicesModes.map((service, index) => {
                  return (
                    <tr
                      className="services-table__row"
                      key={service.id}
                    >
                      <td className={`services-table__cell services-table__cell--service brand-background--id-${service.id} brand-background--mode-${service.mode}`}>
                        <NavLink
                          className="services-table__link"
                          to={`${location.pathname === '/' ? `/service/${service.id}` : `${location.pathname}/service/${service.id}`}`}
                        >
                          <span className="services-table__text">
                            {service.name}
                          </span>
                        </NavLink>
                      </td>
                      <td
                        className={`services-table__cell services-table__cell--status ${hasReason(service) ? 'clickable' : ''}`.trim()}
                        onClick={handleClick(service.id, index)}
                        ref={refServices.current[index]}
                      >
                        <div className="services-table__status">
                          <Status
                            service={service}
                          />
                          {
                            hasReason(service) && (
                              <button className="button button--icon">
                                <span className="visually-hidden">
                                  {reasonVisibility[service.id] ? 'Hide' : 'Show'} status details for {service.name}
                                </span>
                                <Icon
                                  icon={reasonVisibility[service.id] ? <IconCircleMinus /> : <IconCirclePlus />}
                                />
                              </button>
                            )
                          }
                        </div>
                        {
                          reasonVisibility[service.id] && (
                            <Reason
                              service={service}
                            />
                          )
                        }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </PageMain>
    </div>
  );
}

export default ViewServices;

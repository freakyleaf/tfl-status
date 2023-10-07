import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  useScrollTo,
  useServices,
} from '@layouts/Layout';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';
import PageMain from '@components/PageMain';
import Status from '@components/Status';
import StatusReason from '@components/StatusReason';

import buildPageTitle from '@utils/buildPageTitle';

import { havingTroubleFetchingData } from '@constants/textContent';

ViewServices.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  serviceModes: PropTypes.arrayOf(PropTypes.string).isRequired,
  serviceSort: PropTypes.bool,
  viewMode: PropTypes.string.isRequired,
};

function ViewServices(props) {
  const {
    pageTitle,
    serviceModes,
    viewMode,
  } = props;

  const { scrollTo } = useScrollTo();
  const { services } = useServices();

  if (!services.length) {
    throw new Error(havingTroubleFetchingData);
  }

  const servicesFiltered = services.filter((service) => serviceModes.includes(service.modeName));

  const servicesOrdered = [];

  if (viewMode === 'home') {
    serviceModes.forEach((modeName) => {
      servicesOrdered.push(...servicesFiltered.filter((service) => service.modeName === modeName));
    });
  } else if (viewMode === 'bus') {
    servicesOrdered.push(...servicesFiltered.sort((a, b) => a.id.localeCompare(b.id, undefined, {
      numeric: true,
      sensitivity: 'base',
    })));
  }
  else {
    servicesOrdered.push(...servicesFiltered);
  }

  useEffect(() => {
    document.title = buildPageTitle(pageTitle);
  }, [ location ]);

  const hasStatusReason = (service) => {
    return service.lineStatuses[0].reason;
  };

  const {
    pageMainHeight,
    pageMainScrollTop,
  } = useSelector((state) => state.settings);

  const refServices = useRef(servicesOrdered.map(() => createRef()));
  const [ activeService, setActiveService ] = useState(null);
  const [ statusReasonVisibility, setStatusReasonVisibility ] = useState({});

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

      setStatusReasonVisibility({
        ...statusReasonVisibility,
        [serviceId]: !statusReasonVisibility[serviceId],
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
                servicesOrdered.map((service, index) => {
                  return (
                    <tr
                      className="services-table__row"
                      key={service.id}
                    >
                      <td className={`services-table__cell services-table__cell--service brand-background--id-${service.id} brand-background--mode-${service.modeName}`}>
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
                        className={`services-table__cell services-table__cell--status ${hasStatusReason(service) ? 'clickable' : ''}`.trim()}
                        onClick={handleClick(service.id, index)}
                        ref={refServices.current[index]}
                      >
                        <div className="services-table__status">
                          <Status
                            service={service}
                          />
                          {
                            hasStatusReason(service) && (
                              <button className="button button--icon">
                                <span className="visually-hidden">
                                  {statusReasonVisibility[service.id] ? 'Hide' : 'Show'} status details for {service.name}
                                </span>
                                <Icon
                                  icon={statusReasonVisibility[service.id] ? <IconCircleMinus /> : <IconCirclePlus />}
                                />
                              </button>
                            )
                          }
                        </div>
                        {
                          statusReasonVisibility[service.id] && (
                            <StatusReason
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

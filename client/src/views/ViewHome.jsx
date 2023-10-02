import { NavLink } from 'react-router-dom';
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

function ViewHome() {
  const { scrollTo } = useScrollTo();
  const { services } = useServices();

  if (!services.length) {
    throw new Error(havingTroubleFetchingData);
  }

  useEffect(() => {
    document.title = buildPageTitle();
  }, []);

  const hasStatusReason = (service) => {
    return service.lineStatuses[0].reason;
  };

  const {
    pageMainHeight,
    pageMainScrollTop,
  } = useSelector((state) => state.settings);

  const refServices = useRef(services.map(() => createRef()));
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
    <div className="view view--home h-100">
      <PageMain>
        <div className="home h-100">
          <h1 className="visually-hidden">Home</h1>
          <table className="home-table">
            <thead className="visually-hidden">
              <tr>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map((service, index) => {
                  return (
                    <tr
                      className="home-table__row"
                      key={service.id}
                    >
                      <td className={`home-table__cell home-table__cell--service brand-background--${service.id}`}>
                        <NavLink
                          className="home-table__link"
                          to={`/service/${service.id}`}
                        >
                          {service.name}
                        </NavLink>
                      </td>
                      <td
                        className={`home-table__cell home-table__cell--status ${hasStatusReason(service) ? 'clickable' : ''}`.trim()}
                        onClick={handleClick(service.id, index)}
                        ref={refServices.current[index]}
                      >
                        <div className="home-table__status">
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

export default ViewHome;

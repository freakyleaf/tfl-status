import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { useServices } from '@layouts/Layout';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';
import PageMain from '@components/PageMain';
import Status from '@components/Status';
import StatusReason from '@components/StatusReason';

import buildPageTitle from '@utils/buildPageTitle';

import { havingTroubleFetchingData } from '@constants/textContent';

function ViewHome() {
  const { services } = useServices();

  if (!services.length) {
    throw new Error(havingTroubleFetchingData);
  }

  useEffect(() => {
    document.title = buildPageTitle();
  }, []);

  const [ statusReasonVisibility, setStatusReasonVisibility ] = useState({});

  const hasStatusReason = (service) => {
    return service.lineStatuses[0].reason;
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
                services.map((service) => {
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
                        onClick={
                          () => setStatusReasonVisibility({
                            ...statusReasonVisibility,
                            [service.id]: !statusReasonVisibility[service.id],
                          })
                        }
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

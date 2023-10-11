import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  PATH_PINNED,
  PATH_SERVICE,
} from '@constants/paths';

import Icon from '@components/Icon';
import IconCircleMinus from '@components/icons/IconCircleMinus';
import IconCirclePlus from '@components/icons/IconCirclePlus';
import IconPin from '@components/icons/IconPin';
import Reason from '@components/Reason';
import Status from '@components/Status';

ServicesTable.propTypes = {
  pinned: PropTypes.bool,
  scrollTo: PropTypes.func.isRequired,
  serviceGroup: PropTypes.string.isRequired,
  services: PropTypes.object.isRequired,
  servicesModes: PropTypes.array.isRequired,
};

function ServicesTable(props) {
  const {
    pinned,
    scrollTo,
    serviceGroup,
    services,
    servicesModes,
  } = props;

  const hasReason = (service) => {
    return !!service.reasonsConformed.length;
  };

  const {
    pageMainHeight,
    pageMainScrollTop,
  } = useSelector((state) => state.settings);

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
    <table className="services-table">
      <thead className="visually-hidden">
        <tr>
          <th>Service</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          servicesModes.map((service, index) => (
            <tr
              className="services-table__row"
              key={service.id}
            >
              <td className={`services-table__cell services-table__cell--service brand-background--id-${service.id} brand-background--mode-${service.mode}`}>
                <div className="services-table__links">
                  <Link
                    className="services-table__link services-table__link--service"
                    to={`${services[serviceGroup].path}/${PATH_SERVICE}/${service.id}`}
                  >
                    <span className="services-table__text">
                      {service.name}
                    </span>
                  </Link>
                  {
                    pinned && (
                      <Link
                        className="services-table__link services-table__link--pinned"
                        to={`${services[serviceGroup].path}/${PATH_PINNED}`}
                      >
                        <span className="visually-hidden">
                          Edit pinned {service.name} service
                        </span>
                        <Icon
                          className="services-table__pinned"
                          icon={<IconPin />}
                        />
                      </Link>
                    )
                  }
                </div>
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
          ))
        }
      </tbody>
    </table>
  );
}

export default ServicesTable;

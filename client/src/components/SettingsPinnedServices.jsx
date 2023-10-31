import PropTypes from 'prop-types';
import React, { useState } from 'react';

import serviceGroups from '@constants/serviceGroups';

import Collapsible from '@components/Collapsible';
import PinnedSevices from '@components/PinnedServices';

SettingsPinnedServices.propTypes = {
  services: PropTypes.object.isRequired,
};

function SettingsPinnedServices(props) {
  const {
    services,
  } = props;

  const [ pinnedItemVisibility, setPinnedItemVisibility ] = useState({});

  const handleClick = (menuItem) => () => {
    setPinnedItemVisibility({
      ...pinnedItemVisibility,
      [menuItem]: !pinnedItemVisibility[menuItem],
    });
  };

  return (
    <div className="settings-pinned-services">
      <ul className="settings-pinned-services__list">
        {
          serviceGroups.map((serviceGroup) => (
            <li
              className="settings-pinned-services__list-item"
              key={serviceGroup.name}
            >
              <Collapsible
                a11yHelperText={`pinned ${serviceGroup.name} services`}
                collapsed={!pinnedItemVisibility[serviceGroup.name]}
                heading={`Pinned ${serviceGroup.name} Services`}
                onClick={handleClick(serviceGroup.name)}
              />
              {
                pinnedItemVisibility[serviceGroup.name] && (
                  <PinnedSevices
                    services={services[serviceGroup.group]}
                  />
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SettingsPinnedServices;

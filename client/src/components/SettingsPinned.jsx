import PropTypes from 'prop-types';
import React, { useState } from 'react';

import menuItems from '@constants/menuItems';

import kebabCase from '@utils/kebabCase';

import Collapsible from '@components/Collapsible';
import PinnedSevices from '@components/PinnedServices';

SettingsPinnedItems.propTypes = {
  services: PropTypes.object.isRequired,
};

function SettingsPinnedItems(props) {
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
    <div className="settings-pinned">
      <ul className="settings-pinned__list">
        {
          menuItems.map((menuItem) => (
            <li
              className="settings-pinned__list-item"
              key={services[menuItem].namePretty}
            >
              <Collapsible
                a11yHelperText={`individual ${services[menuItem].namePretty} services`}
                collapsed={!pinnedItemVisibility[menuItem]}
                heading={services[menuItem].namePretty}
                id={`collapsible-${kebabCase(services[menuItem].namePretty)}`}
                onClick={handleClick(menuItem)}
              />
              {
                pinnedItemVisibility[menuItem] && (
                  <PinnedSevices
                    services={services[menuItem]}
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

export default SettingsPinnedItems;

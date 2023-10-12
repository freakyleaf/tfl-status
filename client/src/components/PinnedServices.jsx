import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setPinnedItem,
} from '@stores/storeSliceSettings';

import ToggleSwitch from '@components/ToggleSwitch';

ViewPinned.propTypes = {
  services: PropTypes.object.isRequired,
};

function ViewPinned(props) {
  const {
    services,
  } = props;

  const dispatch = useDispatch();
  const { pinned } = useSelector((state) => state.settings);

  const onChange = ({ checked, value }) => {
    dispatch(setPinnedItem({
      id: value,
      pinned: checked,
    }));
  };

  return (
    <div className="pinned-services">
      <ul className="pinned-services__list">
        {
          services.modes.map((service) => (
            <li
              className="pinned-services__list-item"
              key={service.id}
            >
              <ToggleSwitch
                checked={pinned[service.id] || false}
                id={service.id}
                label={<><span className="visually-hidden">Toggle pinned status for </span>{service.name}</>}
                onChange={({ checked, value }) => onChange({ checked, value })}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ViewPinned;

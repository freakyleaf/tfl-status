import React from 'react';

import {
  useFetchServicesQuery,
} from '@api/servicesApi';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '@constants/serviceGroups';

import {
  contentHavingTroubleFetchingData,
  contentSettingsHelperPinnedServices,
  contentSettingsHelperTheme,
  contentSettingsMapStationInterchangeVisibility,
} from '@constants/text';

import Box from '@components/Box';
import Hr from '@components/Hr';
import Loading from '@components/Loading';
import SettingsHighContrastMode from '@components/SettingsHighContrastMode';
import MapSettings from '@components/MapSettings';
import SettingsPinnedServices from '@components/SettingsPinnedServices';
import SettingsTheme from '@components/SettingsTheme';

function Settings() {
  const {
    data: servicesBus,
    error: errorBus,
    isFetching: isFetchingBus,
  } = useFetchServicesQuery(SERVICE_GROUP_BUS);

  const {
    data: servicesCore,
    error: errorCore,
    isFetching: isFetchingCore,
  } = useFetchServicesQuery(SERVICE_GROUP_CORE);

  const {
    data: servicesNationalRail,
    error: errorNationalRail,
    isFetching: isFetchingNationalRail,
  } = useFetchServicesQuery(SERVICE_GROUP_NATIONAL_RAIL);

  const {
    data: servicesRiverBus,
    error: errorRiverBus,
    isFetching: isFetchingRiverBus,
  } = useFetchServicesQuery(SERVICE_GROUP_RIVER_BUS);

  if (errorBus || errorCore || errorNationalRail || errorRiverBus) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const isLoading = isFetchingBus || isFetchingCore || isFetchingNationalRail || isFetchingRiverBus;

  const services = {
    [SERVICE_GROUP_BUS]: servicesBus,
    [SERVICE_GROUP_CORE]: servicesCore,
    [SERVICE_GROUP_NATIONAL_RAIL]: servicesNationalRail,
    [SERVICE_GROUP_RIVER_BUS]: servicesRiverBus,
  };

  return (
    <div className="settings">
      <h2 className="settings__heading">
        High Contrast Mode
      </h2>
      <SettingsHighContrastMode />
      <Hr />
      <h2
        className="settings__heading"
        id="settings-theme"
      >
        Theme
      </h2>
      <Box
        type="information"
      >
        {contentSettingsHelperTheme}
      </Box>
      <SettingsTheme />
      <Hr />
      <h2 className="settings__heading">
        Pinned Services
      </h2>
      <Box
        type="information"
      >
        {contentSettingsHelperPinnedServices}
      </Box>
      {
        isLoading && (
          <Loading />
        )
      }
      {
        !isLoading && (
          <SettingsPinnedServices
            services={services}
          />
        )
      }
      <Hr />
      <h2 className="settings__heading">
        Map
      </h2>
      <Box
        type="information"
      >
        {contentSettingsMapStationInterchangeVisibility}
      </Box>
      <MapSettings />
    </div>
  );
}

export default Settings;

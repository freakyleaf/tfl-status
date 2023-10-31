import React from 'react';

import {
  useFetchServicesQuery,
} from '@api/servicesApi';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
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
import SettingsMapVisibility from '@components/SettingsMapVisibility';
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

  if (errorBus || errorCore || errorNationalRail) {
    throw new Error(contentHavingTroubleFetchingData);
  }

  const isLoading = isFetchingBus || isFetchingCore || isFetchingNationalRail;

  const services = {
    [SERVICE_GROUP_BUS]: servicesBus,
    [SERVICE_GROUP_CORE]: servicesCore,
    [SERVICE_GROUP_NATIONAL_RAIL]: servicesNationalRail,
  };

  return (
    <div className="settings">
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
        Map Station Interchange Visibility
      </h2>
      <Box
        type="information"
      >
        {contentSettingsMapStationInterchangeVisibility}
      </Box>
      <SettingsMapVisibility />
    </div>
  );
}

export default Settings;

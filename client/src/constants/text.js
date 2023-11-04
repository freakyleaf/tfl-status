import {
  SERVICE_NAME_BUS,
  SERVICE_NAME_CORE,
  SERVICE_NAME_NATIONAL_RAIL,
} from '@constants/serviceNames';

export const contentBackToBus = `all ${SERVICE_NAME_BUS} services`;
export const contentBackToCore = `all ${SERVICE_NAME_CORE} services`;
export const contentBackToNationalRail = `all ${SERVICE_NAME_NATIONAL_RAIL} services`;

export const contentHavingTroubleFetchingData = 'We\'re having trouble fetching service data from the TfL API. Please try again later.';
export const contentMapServiceClosed = 'This service is currently closed.';
export const contentNoInformationAvailable = 'No other information is available for this station.';
export const contentNoSimilarServices = 'There are no similar services to the one you requested.';
export const contentPinnedItemsAppearEnd = 'services page.';
export const contentPinnedItemsAppearStart = 'Set the services to appear at the top of the';
export const contentPleaseUseMenu = 'Please use the menu at the top of the page to navigate your way through the app.';
export const contentServiceMultipleRoutes = 'This service has multiple routes. Please select a route below to view a map.';
export const contentSettingsHelperPinnedServices = `Set the services to appear at the top of the '${SERVICE_NAME_CORE}', '${SERVICE_NAME_BUS}', and '${SERVICE_NAME_NATIONAL_RAIL}' services pages.`;
export const contentSettingsHelperTheme = 'Set the appliction theme. Selecting \'Auto\' will use your device\'s theme.';
export const contentSettingsMapStationInterchangeVisibility = 'Set the services to appear as interchanges on maps.';

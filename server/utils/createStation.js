import cleanName from './cleanName.js';
import getDisruptionsStopPoint from './getDisruptionsStopPoint.js';
import getInterchanges from './getInterchanges.js';
import getModesById from './getModesById.js';
import getStationAccessibility from './getStationAccessibility.js';
import getStationEmbellishments from './getStationEmbellishments.js';
import getZone from './getZone.js';
import stringToKebabCase from './stringToKebabCase.js';

const facilityBoolean = (facility) => {
  return typeof facility === 'string' ? facility === 'yes' ? 'Yes' : 'No' : null;
};

const facilityInteger = (facility) => {
  return typeof facility === 'string' ? parseInt(facility, 10) : null;
};

const getDisruptions = async(naptanId) => {
  const disruptions = await getDisruptionsStopPoint(naptanId);
  return disruptions;
};

const getMeta = ({ facilities, naptanId }) => {
  const meta = {};

  facilities.forEach((facility) => {
    const category = stringToKebabCase(facility.category);
    if (!meta[category]) meta[category] = {};
    meta[category][stringToKebabCase(facility.key)] = facility.value;
  });

  const output = {
    contact: {},
    facilities: {},
    zone: {},
  };

  if (meta.address?.address) output.contact.address = meta.address.address;
  if (meta.address?.['phone-no']) output.contact.phone = meta.address['phone-no'];
  if (meta.facility?.['car-park']) output.facilities.carPark = facilityBoolean(meta.facility['car-park']);
  if (meta.facility?.['cash-machines']) output.facilities.cashMachines = facilityInteger(meta.facility['cash-machines']);
  if (meta.facility?.escalators) output.facilities.escalators = facilityInteger(meta.facility.escalators);
  if (meta.facility?.lifts) output.facilities.lifts = facilityInteger(meta.facility.lifts);
  if (meta.facility?.toilets) output.facilities.toilets = facilityBoolean(meta.facility.toilets);
  if (meta.facility?.['wi-fi']) output.facilities.wiFi = facilityBoolean(meta.facility['wi-fi']);
  if (meta.geo?.zone) {
    output.zone = getZone({
      naptanId,
      zone: meta.geo.zone,
    });
  }

  return output;
};

const createStation = async({ data, id }) => {
  const {
    additionalProperties,
    commonName,
    lines,
    naptanId,
  } = data;
  const modesById = await getModesById();

  return {
    accessibility: getStationAccessibility({ topMostParentId: naptanId }),
    disruptions: await getDisruptions(id),
    embellishments: getStationEmbellishments({ topMostParentId: naptanId }),
    interchanges: getInterchanges({ lines, modesById }),
    meta: getMeta({
      facilities: additionalProperties,
      naptanId,
    }),
    name: cleanName(commonName),
    naptanId,
  };
};

export default createStation;

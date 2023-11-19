import {
  SERVICE_MODE_BUS,
} from '../constants/serviceModes.js';

const getZone = ({
  id,
  mode,
  naptanId,
  zone,
}) => {
  // Some data is missing from the TfL API
  if (id === 'tram') zone = 'Tram'; // `id` = `stringToKebabCase(name)`
  if (mode === SERVICE_MODE_BUS) zone = 'None'; // We don't want to display zones for bus routes
  if (naptanId === '910GABWD' || naptanId === '910GABWDXR') zone = '4'; // Abbey Wood
  if (naptanId === '910GBCKNHMJ') zone = '4'; // Beckenham Junction
  if (naptanId === '910GBIRKBCK') zone = '4'; // Birkbeck
  if (naptanId === '910GBUSHYDC') zone = '8'; // Bushey
  if (naptanId === '910GCLPHMJ1' || naptanId === '910GCLPHMJC') zone = '2'; // Clapham Junction
  if (naptanId === '910GCRYSTLP') zone = '3+4'; // Crystal Palace
  if (naptanId === '910GECROYDN') zone = '5'; // East Croydon
  if (naptanId === '910GELMERSE') zone = '4'; // Elmers End
  if (naptanId === '910GHCRT') zone = '6'; // Hampton Court
  if (naptanId === '910GCSEAH') zone = '2'; // Imperial Wharf
  if (naptanId === '910GMITCHMJ') zone = '4'; // Mitcham Junction
  if (naptanId === '910GNWCRELL') zone = '2'; // New Cross
  if (naptanId === '910GNEWXGTE') zone = '2'; // New Cross Gate
  if (naptanId === '910GNORWDJ') zone = '4'; // Norwood Junction
  if (naptanId === '910GSTFODOM') zone = '2/3'; // Stratford Interational
  if (naptanId === '910GSYDENHM') zone = '3'; // Sydenham
  if (naptanId === '910GWATFJDC') zone = 'None'; // Watford Junction
  if (naptanId === '910GWCROYDN') zone = '5'; // West Croydon
  if (naptanId === '910GWOLWCHA' || naptanId === '940GZZDLWLA') zone = '4'; // Woolwich Arsenal
  if (!zone || zone === 'NA') zone = 'None';

  const multiple = zone.includes('+');

  return {
    multiple,
    zones: multiple ? zone.replace('+', ' & ') : zone,
  };
};

export default getZone;

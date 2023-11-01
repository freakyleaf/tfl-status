import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const {
  PUBLIC_BASE_URL_SERVER,
  PUBLIC_ENV,
  PUBLIC_PORT_NUMBER_SERVER,
} = process.env;

const baseUrlServer = PUBLIC_ENV === 'development' ? `${PUBLIC_BASE_URL_SERVER}:${PUBLIC_PORT_NUMBER_SERVER}` : PUBLIC_BASE_URL_SERVER;

const serviceGroups = {
  bus: {
    modes: [
      'bus',
    ],
    pathService: '/bus/service',
    pathServices: '/bus',
  },
  core: {
    modes: [
      'tube',
      'overground',
      'elizabeth-line',
      'dlr',
      'tram',
    ],
    pathService: '/service',
    pathServices: '/',
  },
  ['national-rail']: {
    modes: [
      'national-rail',
    ],
    pathService: '/national-rail/service',
    pathServices: '/national-rail',
  },
};

function formatServiceGroups(services) {
  const output = {};

  for (const [ group, { modes, pathService, pathServices } ] of Object.entries(serviceGroups)) {
    output[group] = {
      modes: modes.flatMap((mode) => {
        return services[mode];
      }),
      pathService,
      pathServices,
    };
  }

  return output;
}

const { data } = await axios.get(`${baseUrlServer}/services/all`);
const date = new Date().toISOString().slice(0, 10);
const serviceGroupsFormatted = formatServiceGroups(data);

const generateSitemapItem = (path) => {
  return (
    `
    <url>
      <loc>https://tflstatus.co.uk${path}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>always</changefreq>
      <priority>0.8</priority>
    </url>
    `
  );
};

const generateSitemap = () => {
  let output = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  Object.values(serviceGroupsFormatted).forEach((serviceGroup) => {
    output += generateSitemapItem(serviceGroup.pathServices);

    serviceGroup.modes.forEach((mode) => {
      output += generateSitemapItem(`${serviceGroup.pathService}/${mode.id}`);
    });
  });

  output += '</urlset>';

  return output;
};

try {
  fs.writeFileSync('./client/dist/sitemap.xml', generateSitemap());
  console.log('sitemap.xml write success 👍');
} catch (error) {
  console.error('sitemap.xml write error', error);
}

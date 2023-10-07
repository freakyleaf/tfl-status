export default function isUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (error) {
    return false;
  }

  return [ 'http:', 'https:' ].includes(url.protocol);
}

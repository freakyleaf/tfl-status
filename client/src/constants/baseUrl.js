const {
  PUBLIC_BASE_URL,
  PUBLIC_ENV,
  PUBLIC_SERVER_PORT_NUMBER,
} = import.meta.env;

const baseUrl = PUBLIC_ENV === 'development' ? `${PUBLIC_BASE_URL}:${PUBLIC_SERVER_PORT_NUMBER}` : PUBLIC_BASE_URL;

export default baseUrl;

const getUrlFromConfig = (path, ...args) => {
  const host = process.env.REACT_APP_API_HOST;
  const key = process.env.REACT_APP_API_KEY;
  const port = process.env.REACT_APP_API_HTTP_PORT;
  const secure = process.env.REACT_APP_API_SECURE;
  const version = process.env.REACT_APP_API_VERSION;

  if (secure === undefined || secure === null) {
    throw new Error('Please set the REACT_APP_API_SECURE env variable');
  }

  if (host === undefined || host === null) {
    throw new Error('Please set the REACT_APP_API_HOST env variable');
  }

  if (key === undefined || key === null) {
    throw new Error('Please set the REACT_APP_API_HOST env variable');
  }

  if (port === undefined || port === null) {
    throw new Error('Please set the REACT_APP_API_JSTP_PORT env variable');
  }

  if (version === undefined || version === null) {
    throw new Error('Please set the REACT_APP_API_VERSION env variable');
  }

  const protocol = secure && secure !== 'false' ? 's' : '';

  return `http${protocol}://${host}/${version}${path}?api_key=${key}${args}`;
};

export const RESTApi = (path, ...args) =>
  fetch(getUrlFromConfig(path, ...args), {
    method: 'GET',
    dataType: 'jsonp',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(data => data.json());

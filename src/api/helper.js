import axios from 'axios';
import config from '../http/config';
import baseURL from '../http/base';

// Did not handle more settings after the axios.create(config) since we don't need it now,
// it can be extend if we need such as POST or other http methods.
const fetch = axios.create(config);

export function request(method, uri, data = null, params = null) {
  if (!method) {
    throw new Error('API function call requires method argument.');
  }

  if (!uri) {
    throw new Error('API function call requires uri argument');
  }

  const url = `${baseURL}/${uri}`;
  return fetch({
    method,
    url,
    data,
    params,
  });
}

export default {
  request,
};

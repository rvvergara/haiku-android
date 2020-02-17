import axios from 'axios';

const baseUrl = 'http://10.0.2.2:8000';

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const result = await axios[method](`${baseUrl}/${path}`, data);

  return result;
};


export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const sendAuthorizedRequest = async (method, path, token, data = null) => {
  setAuthorizationToken(token);
  const result = await axios[method](`${baseUrl}/${path}`, data);

  return result;
};

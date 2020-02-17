
import { sendRequest, setAuthorizationToken } from '../../utils/api';

export const login = (loginParams) => async (dispatch) => {
  const path = 'v1/login';

  try {
    const res = await sendRequest('post', path, loginParams);
    const { token, user } = res.data;
    setAuthorizationToken(token);
  } catch (err) {
    console.log('LOGIN ERROR', err);
  }
};

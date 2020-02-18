import AsyncStorage from '@react-native-community/async-storage';
import {sendUnauthenticatedRequest, sendAuthorizedRequest, setAuthorizationToken} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';
import {setCurrentUser} from '../actions/user';
import { setError} from '../actions/error';

export const signup = (signupParams) => async (dispatch) => {
  const path = 'v1/users';

  try {
    await sendUnauthenticatedRequest('post', path, signupParams);
    return navigate('VerifyMessage');
  } catch (err) {
    return dispatch(setError(err.response.data.error));
  }
};

export const login = (loginParams) => async (dispatch) => {
  const path = 'v1/login';

  try {
    const res = await sendUnauthenticatedRequest('post', path, loginParams);
    const {token, user} = res.data;
    await AsyncStorage.setItem('token', token);
    dispatch(
      setCurrentUser({
        authenticated: true,
        data: user,
      }),
    );
    navigate('ResolveProfile');
  } catch (err) {
    dispatch(setError('Invalid email or password!'));
  }
};

export const logout = () => async (dispatch) => {
  setAuthorizationToken(false);

  await AsyncStorage.removeItem('token');

  dispatch(
    setCurrentUser({
      authenticated: false,
      data: {},
    }),
  );
  navigate('Login');
};

const fetchUserProfile = async (id, role) => {
  const path = `v1/users/${id}/${role.toLowerCase()}`;
  try {
    const token = await AsyncStorage.getItem('token');
    const res = await sendAuthorizedRequest('get', path, token);
    return res.data[role.toLowerCase()];
  } catch (err) {
    return false;
  }
};

export const fetchUserData = (id) => async (dispatch) => {
  const path = `v1/users/${id}`;
  try {
    const token = await AsyncStorage.getItem('token');
    const res = await sendAuthorizedRequest('get', path, token);
    const user = await res.data;
    const {role} = user.user;
    const profile = await fetchUserProfile(id, role);
    if (profile) {
      return dispatch(
        setCurrentUser({
          authenticated: true,
          data: {
            ...user.user,
            [role.toLowerCase()]: profile,
            token: user.token,
          },
        }),
      );
    }
    return dispatch(
      setCurrentUser({
        authenticated: true,
        data: {...user.user, token: user.token},
      }),
    );
  } catch (err) {
    return dispatch(setError(err));
  }
};

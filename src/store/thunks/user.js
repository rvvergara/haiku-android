import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import moment from 'moment';
import {sendUnauthenticatedRequest, sendAuthorizedRequest, setAuthorizationToken} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';
import {setCurrentUser} from '../actions/user';

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
    navigate('patientFlow');
  } catch (err) {
    console.log('LOGIN ERROR', err);
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

export const checkIfTokenExp = (decoded) => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
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
      dispatch(
        setCurrentUser({
          authenticated: true,
          data: {
            ...user.user,
            [role.toLowerCase()]: profile,
            token: user.token,
          },
        }),
      );
    } else {
      dispatch(
        setCurrentUser({
          authenticated: true,
          data: {...user.user, token: user.token},
        }),
      );
    }
  } catch (err) {
    // return dispatch(setError(err));
    console.log(err, 'ERROR');
  }
};

export const resolveToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');

  if (token && !checkIfTokenExp(decode(token))) {
    const decoded = decode(token);
    await dispatch(fetchUserData(decoded.user_id));
    navigate('Home');
  } else {
    navigate('Login');
  }
};

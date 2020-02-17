import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import moment from 'moment';
import {sendRequest, setAuthorizationToken} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';
import {setCurrentUser} from '../actions/user';

export const login = (loginParams) => async (dispatch) => {
  const path = 'v1/login';

  try {
    const res = await sendRequest('post', path, loginParams);
    const {token, user} = res.data;
    setAuthorizationToken(token);
    // Store token in Async storage
    await AsyncStorage.setItem('token', token);
    // Dispatch currentUser Data
    dispatch(
      setCurrentUser({
        authenticated: true,
        data: user,
      }),
    );
    // navigate to the appropriate flow
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

// Resolvers
export const checkIfTokenExp = (decoded) => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
};

export const resolveToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');

  if (token && !checkIfTokenExp(decode(token))) {
    dispatch(setCurrentUser({
      authenticated: true,
      data: decode(token),
    }));
    navigate('Home');
  } else {
    navigate('Login');
  }
};

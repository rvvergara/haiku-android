import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import decode from 'jwt-decode';
import { fetchUserData } from './user';
import { navigate } from '../../utils/navigationRef';

const checkIfTokenExp = (decoded) => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
};

export const resolveToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');

  if (token && !checkIfTokenExp(decode(token))) {
    const decoded = decode(token);
    await dispatch(fetchUserData(decoded.user_id));
    navigate('ResolveProfile');
  } else {
    navigate('Login');
  }
};

export const resolveProfile = (userData) => async (dispatch) => {
  const hasProfile = userData.patient || userData.practitioner;

  return hasProfile ? navigate('Home') : navigate('NewProfile');
};

import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import moment from 'moment';
import {navigate} from './navigationRef';

export const checkIfTokenExp = decoded => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
};

export const resolveToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token && checkIfTokenExp(decode(token))) {
    resolveProfile();
    navigate('Home');
  } else {
    navigate('Login');
  }
};

export const resolveProfile = async () => {
  const token = await AsyncStorage.getItem('token');
  const decoded = decode(token);
  console.log(decoded);
};

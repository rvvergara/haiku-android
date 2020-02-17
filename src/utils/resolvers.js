import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from './navigationRef';

export const resolveToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    navigate('Home');
  } else {
    navigate('Login');
  }
};

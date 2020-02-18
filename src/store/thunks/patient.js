import AsyncStorage from '@react-native-community/async-storage';
import { sendAuthorizedRequest } from '../../utils/api';
import { setCurrentUser } from '../actions/user';
import { setError } from '../actions/error';
import { navigate } from '../../utils/navigationRef';

export const createPatient = (params) => async (dispatch, getState) => {
  const path = 'v1/patients';
  const token = await AsyncStorage.getItem('token');
  try {
    const res = await sendAuthorizedRequest('post', path, token, params);
    const patient = res.data;
    const { currentUser } = getState();
    const updatedUserData = { ...currentUser.data, patient };
    dispatch(setCurrentUser({ ...currentUser, data: updatedUserData }));
    navigate('Home');
  } catch (err) {
    // console.log('ERROR', err.response.data.error.errors);
    dispatch(setError('Something went wrong'));
  }
};

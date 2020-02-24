import AsyncStorage from '@react-native-community/async-storage';
import {sendAuthorizedRequest} from '../../utils/api';
import {setCurrentUser} from '../actions/user';
import { navigate } from '../../utils/navigationRef';
import { setErrors } from '../actions/error';
import { listPractitioners } from '../actions/practitioner';

export const createPractitioner = (params) => async (dispatch, getState) => {
  const path = 'v1/practitioners';
  const token = await AsyncStorage.getItem('token');
  try {
    const res = await sendAuthorizedRequest('post', path, token, params);
    const { practitioner } = res.data;
    const {currentUser} = getState();
    const updatedUserData = {...currentUser.data, practitioner};
    dispatch(setCurrentUser({...currentUser, data: updatedUserData}));
    navigate('practitionerFlow');
  } catch (err) {
    const errors = err.response.data.error.errors.map((error) => error.msg);
    dispatch(setErrors(errors));
  }
};

export const updatePractitioner = (params, practitionerId) => async (dispatch, getState) => {
  const path = `v1/practitioners/${practitionerId}`;
  const token = await AsyncStorage.getItem('token');
  try {
    const res = await sendAuthorizedRequest('put', path, token, params);
    const { practitioner } = res.data;
    const { currentUser } = getState();
    const updatedUserData = { ...currentUser.data, practitioner };
    dispatch(setCurrentUser({ ...currentUser, data: updatedUserData }));
    navigate('Home');
  } catch (err) {
    const errors = err.response.data.error.errors.map((error) => error.msg);
    dispatch(setErrors(errors));
  }
};

export const fetchPractitioners = () => async (dispatch) => {
  const path = 'v1/practitioners';
  try {
    const token = await AsyncStorage.getItem('token');
    const res = await sendAuthorizedRequest('get', path, token);
    dispatch(listPractitioners(res.data.practitioners));
    return res.data;
  } catch (err) {
    console.log('ERROR', err);
    // return dispatch(setErrors(err.response.data));
  }
};

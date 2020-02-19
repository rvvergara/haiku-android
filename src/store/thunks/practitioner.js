import AsyncStorage from '@react-native-community/async-storage';
import {sendAuthorizedRequest} from '../../utils/api';
import {setCurrentUser} from '../actions/user';

export const createPractitioner = params => async (dispatch, getState) => {
  const path = 'v1/practitioners';
  const token = await AsyncStorage.getItem('token');
  try {
    const res = await sendAuthorizedRequest('post', path, token, params);
    const {practitioner} = res.data;
    const {currentUser} = getState();
    const updatedUserData = {...currentUser.data, practitioner};
    dispatch(setCurrentUser({...currentUser, data: updatedUserData}));
  } catch (err) {
    // const errors = err.response.data.error.errors.map(error => error.msg);
    // dispatch(setErrors(errors));
    console.log(err);
  }
};

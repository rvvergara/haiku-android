import AsyncStorage from '@react-native-community/async-storage';
import {sendRequest, setAuthorizationToken} from '../../utils/api';
import { setCurrentUser } from '../actions/user';
import { navigate } from '../../utils/navigationRef';

export const login = (loginParams) => async (dispatch) => {
  const path = 'v1/login';

  try {
    const res = await sendRequest('post', path, loginParams);
    const {token, user} = res.data;
    setAuthorizationToken(token);
    // Store token in Async storage
    await AsyncStorage.setItem('token', token);
    // Dispatch currentUser Data
    dispatch(setCurrentUser({
      authenticated: true,
      data: user,
    }));
    // navigate to the appropriate flow
    navigate('patientFlow');
  } catch (err) {
    console.log('LOGIN ERROR', err);
  }
};

import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import moment from 'moment';
import {sendRequest, setAuthorizationToken} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';
import {setCurrentUser} from '../actions/user';

export const login = loginParams => async dispatch => {
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

export const logout = () => async dispatch => {
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
export const checkIfTokenExp = decoded => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
};

const fetchUserProfile = async (id, role) => {
  // const path = `v1/${role.toLowerCase()}s/${id}/user`;
  const path = `v1/users/${id}/${role.toLowerCase()}`;
  try {
    const res = await sendRequest('get', path);
    return res.data[role.toLowerCase()];
  } catch (err) {
    return false;
  }
};

export const fetchUserData = id => async dispatch => {
  console.log('RUNNING');
  const path = `v1/users/${id}`;
  try {
    const res = await sendRequest('get', path);
    const user = await res.data;
    const {role} = user.user;
    // Fetch user's profile data (whether patient or practitioner)
    const profile = await fetchUserProfile(id, role);
    if (profile) {
      // If user has a profile already add it to user data
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
      // Redirect user to profile edit page
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

export const resolveToken = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');

  if (token && !checkIfTokenExp(decode(token))) {
    await fetchUserData(decode(token).id);
    navigate('Home');
  } else {
    navigate('Login');
  }
};

import validator from 'validator';

export const isValidSignup = (dispatch, setError, { email, password, role }) => {
  if (!password) {
    dispatch(setError('All fields are required'));
  } else if (!validator.isEmail(email)) {
    dispatch(setError('Please put a valid email'));
  } else if (role === '') {
    dispatch(setError('Please select a role'));
  } else {
    return true;
  }
  return false;
};

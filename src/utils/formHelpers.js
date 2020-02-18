import validator from 'validator';

export const isValidSignup = (dispatch, setErrors, { email, password, role }) => {
  if (!password) {
    dispatch(setErrors(['All fields are required']));
  } else if (!validator.isEmail(email)) {
    dispatch(setErrors(['Please put a valid email']));
  } else if (role === '') {
    dispatch(setErrors(['Please select a role']));
  } else {
    return true;
  }
  return false;
};

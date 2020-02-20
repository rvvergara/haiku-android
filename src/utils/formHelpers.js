import { Platform } from 'react-native';
import validator from 'validator';

import ImagePicker from 'react-native-image-picker';


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

export const handleChooseImage = (setFiles) => {
  const options = {
    noData: true,
  };
  ImagePicker.launchImageLibrary(options, (res) => {
    if (res.path) {
      const photoFile = {
        name: res.fileName,
        type: res.type,
        uri: Platform.OS === 'android' ? res.uri : res.uri.replace('file://', ''),
      };
      setFiles(photoFile);
    }
  });
};

export const submitProfile = (dispatch, action, params, resourceId) => {
  const formData = new FormData();

  Object.keys(params).forEach((key) => formData.append(key, params[key]));
  dispatch(
    action(formData, resourceId),
  );
};

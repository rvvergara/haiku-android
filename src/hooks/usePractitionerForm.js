import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrors } from '../store/actions/error';
import { createPractitioner, updatePractitioner } from '../store/thunks/practitioner';
import { submitProfile } from '../utils/formHelpers';

export default (navigation) => {
  const { routeName } = navigation.state;
  const currentUserData = useSelector((state) => state.currentUser.data);
  const userId = currentUserData.id;
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(
    currentUserData.practitioner ? currentUserData.practitioner.firstName : '',
  );
  const [lastName, setLastName] = useState(
    currentUserData.practitioner ? currentUserData.practitioner.lastName : '',
  );
  const [education, setEducation] = useState(
    routeName === 'ProfileEdit' ? JSON.parse(currentUserData.practitioner.education) : [],
  );
  const [specialties, setSpecialties] = useState(
    routeName === 'ProfileEdit'
      ? JSON.parse(currentUserData.practitioner.specialties)
      : [],
  );
  const [biography, setBiography] = useState(
    currentUserData.practitioner ? currentUserData.practitioner.biography : '',
  );
  const [yearsOfExperience, setYearsOfExperience] = useState(
    currentUserData.practitioner
      ? currentUserData.practitioner.yearsOfExperience
      : '',
  );
  const [files, setFiles] = useState(null);

  const image = currentUserData.practitioner ? currentUserData.practitioner.image : null;

  const practitionerId = currentUserData.practitioner ? currentUserData.practitioner.id : undefined;

  const practitionerParams = {
    firstName,
    lastName,
    education,
    specialties,
    biography,
    yearsOfExperience,
    userId,
    files,
  };

  useEffect(() => () => dispatch(setErrors([])), []);


  const buttonTitle = navigation.state.routeName === 'NewProfile'
    ? 'Create Profile'
    : 'Update Profile';

  const onChangeYearsExperience = (val) => {
    const re = /^\d+(\.\d{0,2})?$/gi;
    if (!val || val.match(re)) setYearsOfExperience(val);
  };

  const handleSubmit = () => {
    const params = {
      ...practitionerParams,
      education: JSON.stringify(education),
      specialties: JSON.stringify(specialties),
    };

    const action = navigation.state.routeName === 'NewProfile'
      ? createPractitioner
      : updatePractitioner;

    submitProfile(dispatch, action, params, practitionerId);
  };

  const initialImageUri = image || 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : initialImageUri;

  return {
    practitionerParams,
    practitionerSetters: {
      setFirstName,
      setLastName,
      setEducation,
      setSpecialties,
      setBiography,
      setYearsOfExperience,
      setFiles,
    },
    buttonTitle,
    errors,
    dispatch,
    image,
    imageUri,
    practitionerId,
    onChangeYearsExperience,
    handleSubmit,
  };
};

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrors } from '../store/actions/error';
import { createPatient, updatePatient } from '../store/thunks/patient';
import { submitProfile } from '../utils/formHelpers';

export default (navigation) => {
  const {routeName} = navigation.state;
  const currentUserData = useSelector((state) => state.currentUser.data);
  const userId = currentUserData.id;
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(
    currentUserData.patient ? currentUserData.patient.firstName : '',
  );
  const [lastName, setLastName] = useState(
    currentUserData.patient ? currentUserData.patient.lastName : '',
  );
  const [contactNumber, setContactNumber] = useState(
    currentUserData.patient ? currentUserData.patient.contactNumber : '',
  );
  const [passport, setPassport] = useState(
    currentUserData.patient ? currentUserData.patient.passport : '',
  );
  const [postalCode, setPostalCode] = useState(
    currentUserData.patient ? currentUserData.patient.postalCode : '',
  );
  const [address, setAddress] = useState(
    currentUserData.patient ? currentUserData.patient.address : '',
  );
  const [languages, setLanguages] = useState(
    routeName === 'ProfileEdit'
      ? JSON.parse(currentUserData.patient.languages)
      : [],
  );
  const [files, setFiles] = useState(null);

  const image = currentUserData.patient ? currentUserData.patient.image : null;

  const patientId = currentUserData.patient ? currentUserData.patient.id : undefined;

  const patientParams = {
    firstName,
    lastName,
    contactNumber,
    passport,
    postalCode,
    address,
    languages,
    userId,
    files,
  };

  useEffect(() => () => dispatch(setErrors([])), []);


  const buttonTitle = navigation.state.routeName === 'NewProfile'
    ? 'Create Profile'
    : 'Update Profile';

  const handleSubmit = () => {
    const params = {...patientParams, languages: JSON.stringify(languages), dateOfBirth: '1989-01-10'};

    const action = navigation.state.routeName === 'NewProfile' ? createPatient : updatePatient;

    submitProfile(dispatch, action, params, patientId);
  };

  const initialImageUri = image || 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : initialImageUri;

  return {
    patientParams,
    patientSetters: {
      setFirstName,
      setLastName,
      setContactNumber,
      setPassport,
      setPostalCode,
      setAddress,
      setLanguages,
      setFiles,
    },
    buttonTitle,
    errors,
    dispatch,
    image,
    imageUri,
    patientId,
    handleSubmit,
  };
};

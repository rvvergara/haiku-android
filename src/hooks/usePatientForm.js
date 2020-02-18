import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
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
    currentUserData.patient
      ? JSON.parse(currentUserData.patient.languages)
      : [],
  );
  const [files, setFiles] = useState(null);

  return {
    patientParams: {
      firstName,
      lastName,
      contactNumber,
      passport,
      postalCode,
      address,
      languages,
      userId,
      files,
    },
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
    errors,
    dispatch,
  };
};

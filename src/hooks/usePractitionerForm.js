import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default (routeName) => {
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

  return {
    practitionerParams: {
      firstName,
      lastName,
      education,
      specialties,
      biography,
      yearsOfExperience,
      userId,
      files,
    },
    practitionerSetters: {
      setFirstName,
      setLastName,
      setEducation,
      setSpecialties,
      setBiography,
      setYearsOfExperience,
      setFiles,
    },
    errors,
    dispatch,
  };
};

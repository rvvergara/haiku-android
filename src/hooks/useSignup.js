import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrors } from '../store/actions/error';

export default () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setRole('');
    setReferralCode('');
    dispatch(setErrors([]));
  };

  return {
    clearForm,
    dispatch,
    errors,
    signupParams: {
      email,
      password,
      role,
      referralCode,
    },
    setEmail,
    setPassword,
    setRole,
    setReferralCode,
  };
};

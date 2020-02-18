import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../store/actions/error';

export default () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setRole('');
    setReferralCode('');
    dispatch(setError(''));
  };

  return {
    clearForm,
    dispatch,
    error,
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

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/thunks/user';
import { setErrors } from '../store/actions/error';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login({email, password}));
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    dispatch(setErrors([]));
  };

  useEffect(() => () => clearForm(), []);

  return {
    loginParams: {
      email,
      password,
    },
    loginSetters: {
      setEmail,
      setPassword,
    },
    errors,
    handleSubmit,
    clearForm,
  };
};

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resolveToken } from '../store/thunks/resolvers';

const ResolveAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resolveToken());
  }, []);
  return null;
};

export default ResolveAuth;

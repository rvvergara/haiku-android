import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resolveProfile } from '../store/thunks/resolvers';

const ResolveProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser.data);
  useEffect(() => {
    dispatch(resolveProfile(userData));
  }, []);

  return null;
};

export default ResolveProfile;

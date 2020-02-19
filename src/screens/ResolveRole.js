import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resolveRole } from '../store/thunks/resolvers';

const ResolveRole = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser.data);
  useEffect(() => {
    dispatch(resolveRole(userData));
  }, []);

  return null;
};

export default ResolveRole;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPractitioners } from '../store/thunks/practitioner';
import { listPractitioners, setPractitioner } from '../store/actions/practitioner';
import { navigate } from '../utils/navigationRef';

export default () => {
  const dispatch = useDispatch();
  const practitioners = useSelector((state) => state.practitioners);

  useEffect(() => {
    dispatch(fetchPractitioners());
    return () => dispatch(listPractitioners([]));
  }, []);

  const handleProfileClick = (profile) => {
    dispatch(setPractitioner(profile));
    navigate('Profile');
  };

  return {
    practitioners,
    handleProfileClick,
  };
};

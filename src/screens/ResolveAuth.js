import { useEffect } from 'react';
import { resolveToken } from '../utils/resolvers';

const ResolveAuth = () => {
  useEffect(() => {
    resolveToken();
  }, []);
  return null;
};

export default ResolveAuth;

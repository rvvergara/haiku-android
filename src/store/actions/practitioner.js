import { LIST_PRACTITIONERS } from './types';

export const listPractitioners = (practitioners) => ({
  type: LIST_PRACTITIONERS,
  practitioners,
});

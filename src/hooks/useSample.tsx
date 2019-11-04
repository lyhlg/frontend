import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~store/modules';
import { request } from '~store/modules/sample';

function useCounter() {
  const sampleStore = useSelector((state: RootState) => state.sample);
  const dispatch = useDispatch();

  const onRequest = useCallback(() => dispatch(request()), [dispatch]);

  return {
    sampleStore,
    onRequest,
  };
}

function dummy(): string {
  return 'dummy';
}

export { useCounter, dummy };

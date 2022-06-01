import { useCreateContext } from '../create-context';
import { reducer, initailState } from './app.reducer';

const [state, useDispatch, provider] = useCreateContext(initailState, reducer);
export const useStickyState = state;
export const useStickyDispatch = useDispatch;
export const StickyProvider = provider;
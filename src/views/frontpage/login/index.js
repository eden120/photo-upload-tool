import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

export const LoadableLogin = Loadable({
  loader: () => import('./LoginPage'),
  loading: Loading,
});
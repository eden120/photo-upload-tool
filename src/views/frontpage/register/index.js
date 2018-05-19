import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

export const LoadableRegister = Loadable({
  loader: () => import('./SignUpPage'),
  loading: Loading,
});
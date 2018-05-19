import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

export const LoadableHome = Loadable({
  loader: () => import('./HomePage'),
  loading: Loading,
});
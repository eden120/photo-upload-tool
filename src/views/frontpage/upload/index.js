import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

export const LoadableUpload = Loadable({
  loader: () => import('./UploadPage'),
  loading: Loading,
});
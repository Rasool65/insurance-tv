import { URL_REGISTERATION, URL_LOGIN } from '@src/configs/urls';
import Register from '@src/pages/register';
import IRoute from './IRoute';
import RouteType from './RouteType';

const routes: IRoute[] = [
  {
    path: URL_REGISTERATION,
    component: Register,
    type: RouteType.public,
    props: {
      title: 'صفحه اصلی',
    },
  },
];

export default routes;

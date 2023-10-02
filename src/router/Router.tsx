import { Fragment, FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import routes from '../configs/routerConfig/RouterList';
import RouteType from '../configs/routerConfig/RouteType';
import PrivateRoute from './PrivateRoute';
import { URL_LOGIN, URL_MAIN } from '@src/configs/urls';
import { useSelector } from 'react-redux';
import { RootStateType } from '@src/redux/Store';

const Routers: FunctionComponent = () => {
  const authenticationStore = useSelector((state: RootStateType) => state.authentication);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return route.type == RouteType.private ? (
            //* Private Route
            <Route key={index} path={route.path} element={<PrivateRoute />}>
              <Route
                key={index}
                path={route.path}
                element={
                  // <PrivateLayout {...route.props}>
                  <route.component name={route.name} {...route.props} />
                  // </PrivateLayout>
                }
              />
            </Route>
          ) : (
            //* Public Route
            <Route
              key={index}
              path={route.path}
              element={
                <Fragment>
                  <route.component name={route.name} {...route.props} />
                </Fragment>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

import authenticationReducer from './reducers/authenticationReducer';
import requestReducer from './reducers/requestReducer';
import themeReducer from './reducers/themeReducer';

export const RootReducer = {
  authentication: authenticationReducer,
  Request: requestReducer,
  theme: themeReducer,
};

export default RootReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import coursesReducer from '../modules/courses/coursesReducer';
import authReducer from '../modules/auth/authReducer';

const reducer = combineReducers({
  form: formReducer,
  coursesReducer,
  authReducer
});

export default reducer;
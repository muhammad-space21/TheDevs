import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import coursesReducer from '../modules/courses/coursesReducer';

const reducer = combineReducers({
  form: formReducer,
  coursesReducer
});

export default reducer;
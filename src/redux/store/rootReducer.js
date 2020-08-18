import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import coursesReducer from '../modules/courses/coursesReducer';
import authReducer from '../modules/auth/authReducer';
import pricesReducer from '../modules/prices/pricesReducer';
import singleCourseReducer from '../modules/singleCourse/singleCourseReducer';
import singlePriceReducer from '../modules/singlePrice/singlePriceReducer';

const reducer = combineReducers({
  form: formReducer,
  coursesReducer,
  authReducer,
  pricesReducer,
  singleCourseReducer,
  singlePriceReducer
});

export default reducer;
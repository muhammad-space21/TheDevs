import { combineReducers } from 'redux';

import coursesReducer from '../modules/courses/coursesReducer';
import authReducer from '../modules/auth/authReducer';
import pricesReducer from '../modules/prices/pricesReducer';
import singleCourseReducer from '../modules/singleCourse/singleCourseReducer';
import singlePriceReducer from '../modules/singlePrice/singlePriceReducer';
import signUpReducer from '../modules/signUp/signUpReducer';
import leadModalReducer from '../modules/leadModal/leadModalReducer';


const reducer = combineReducers({
  coursesReducer,
  authReducer,
  pricesReducer,
  singleCourseReducer,
  singlePriceReducer,
  signUpReducer,
  leadModalReducer
});

export default reducer;
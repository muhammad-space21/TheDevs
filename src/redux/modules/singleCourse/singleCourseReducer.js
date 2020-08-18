import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  singleCourse: {}
};

const map = {
  [`${actionTypes.GET_SINGLE_COURSE}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_SINGLE_COURSE}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    singleCourse: payload.data
  }),
  [`${actionTypes.GET_SINGLE_COURSE}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function singleCourseReducer(state=defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
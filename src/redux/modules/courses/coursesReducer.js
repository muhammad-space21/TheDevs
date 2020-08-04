import actionTypes from '../../../constants/index';

const initialState = {
  loading: false,
  error: false,
  courses: {}
};

const map = {
  [`${actionTypes.GET_COURSES}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_COURSES}${actionTypes.FULFILLED}`]: (state, {payload}) => ({
    ...state,
    loading: false,
    courses: payload.data.data,
  }),
  [`${actionTypes.GET_COURSES}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};


export default function coursesReducer(state=initialState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
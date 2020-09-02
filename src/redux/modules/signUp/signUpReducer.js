import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  success: false
};

const map = {
  [`${actionTypes.SIGN_UP}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SIGN_UP}${actionTypes.FULFILLED}`]: (state, {payload}) => ({
    ...state,
    loading: false,
    success: payload.data.response.status === 200 ? true : false,
  }),
  [`${actionTypes.SIGN_UP}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function signUpReducer (state=defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
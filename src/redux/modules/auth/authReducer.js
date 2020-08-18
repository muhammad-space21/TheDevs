import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  token: ''
};

const map = {
  [`${actionTypes.GET_TOKEN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    token: payload.data.key
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  }),
  [actionTypes.WRITE_TOKEN]: (state, { payload }) => ({
    ...state,
    token: payload
  })
};

export default function authReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
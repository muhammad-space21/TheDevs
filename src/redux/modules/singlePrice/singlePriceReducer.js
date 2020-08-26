import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  singlePrice: {}
};

const map = {
  [`${actionTypes.GET_SINGLE_PRICE}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_SINGLE_PRICE}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    singlePrice: payload.data.results
  }),
  [`${actionTypes.GET_SINGLE_PRICE}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function singlePriceReducer(state=defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
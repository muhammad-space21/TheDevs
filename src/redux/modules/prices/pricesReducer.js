import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  prices: {}
};


const map = {
  [`${actionTypes.GET_PRICES}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
  }),
  [`${actionTypes.GET_PRICES}${actionTypes.FULFILLED}`]: (state, {payload}) => ({
    ...state,
    loading: false,
    prices: payload.data.results
  }),
  [`${actionTypes.GET_PRICES}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  }) 
};

export default function pricesReducer(state=defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
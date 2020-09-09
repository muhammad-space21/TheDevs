import actionTypes from '../../../constants/actionTypes';

const defaultState = {
  loading: false,
  error: false,
  success: false
};

const map = {
  [`${actionTypes.SEND_LEAD_MODAL}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SEND_LEAD_MODAL}${actionTypes.FULFILLED}`]: (state, {payload} ) => ({
    ...state,
    loading: false,
    success: payload.data.response.status === 200 ? true : false,
  }),
  [`${actionTypes.SEND_LEAD_MODAL}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    success: false,
    error: true
  })
};


export default function leadModalReducer (state=defaultState, action) {
  return (map[actionTypes.type] && map[actionTypes.type](state, action)) || state;
};
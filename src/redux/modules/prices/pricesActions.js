import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';
import { getHeaders } from '../../../utils/index';

export const getPrices = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_PRICES,
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8000/en/api/v1/subscription-types/',
      headers: getHeaders(getState)
    })
  });
};
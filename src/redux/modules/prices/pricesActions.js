import axios from 'axios';

import actionTypes from '../../../constants/index';
import { getHeaders } from '../../../utils/index';

export const getPrices = () => ({dispatch, getState}) => {
  dispatch({
    type: actionTypes.GET_PRICES,
    payload: axios({
      method: 'GET',
      url: '/subscription-types/',
      headers: getHeaders(getState)
    })
  });
};

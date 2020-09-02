import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';
import { getHeaders } from '../../../utils/index';

export const getSinglePrice = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_SINGLE_PRICE,
    payload: axios({
      method: 'GET',
      url: `https://api.thedevs.co/en/api/v1/subscription-types/${id}/`,
      headers: getHeaders(getState)
    })
  })
};
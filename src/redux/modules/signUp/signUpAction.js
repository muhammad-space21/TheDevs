import axios from 'axios';
import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils/index';


export const signUp = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SIGN_UP,
    payload: axios({
      method: 'POST',
      url: 'http://api.thedevs.co/en/api/v1/dj-rest-auth/registration/',
      data,
      headers: getHeaders(getState)
    })
  })
};
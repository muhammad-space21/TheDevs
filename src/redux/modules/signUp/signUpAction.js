import axios from 'axios';
import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils/index';


export const signUp = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SIGN_UP,
    payload: axios({
      method: 'POST',
      url: '',
      data,
      headers: getHeaders(getState)
    })
  })
};
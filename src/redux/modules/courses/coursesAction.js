import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';
import { getHeaders } from '../../../utils/index';

export const getCourses = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_COURSES,
    payload: axios({
      method: 'GET',
      url: 'https://api.thedevs.co/en/api/v1/courses/', 
      headers: getHeaders(getState)
    })
  })
};
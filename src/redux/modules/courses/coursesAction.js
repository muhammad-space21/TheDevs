import axios from 'axios';

import actionTypes from '../../../constants/index';
import { getHeaders } from '../../../utils/index';

export const getCourses = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_COURSES,
    payload: axios({
      method: 'GET',
      url: '/courses/', 
      headers: getHeaders(getState)
    })
  })
};
import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils/index';

export const getSingleCourse = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_SINGLE_COURSE,
    payload: axios({
      method: 'GET',
      url: `http://api.thedevs.co/en/api/v1/courses/${id}/`,
      headers: getHeaders(getState)
    })   
  })
};
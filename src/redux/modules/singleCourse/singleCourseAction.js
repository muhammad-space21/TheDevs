import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils/index';


export const getSingleCourse = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_SINGLE_COURSE,
    payload: axios({
      method: 'GET',
      url: `/courses/${id}`,
      headers: getHeaders(getState)
    })
  })
};


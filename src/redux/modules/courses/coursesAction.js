import axios from 'axios';

// import { API_URL } from '../../../config/index';

import actionTypes from '../../../constants/index';


export const getCourses = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_COURSES,
    payload: axios({
			method: 'GET',
      url: 'https://test.thedevs.co/en/api/v1/courses',
    })
  })
};
import axios from 'axios';

import { API_URL } from '../../../config/index';

import actionTypes from '../../../constants/index';

// export function getCourses() {
//   const request = axios.get('https://d7d148b1335b.ngrok.io/en/api/v1/courses/')
//   return dispatch => {
//     request.then(({data}) => {
//       dispatch({type: actionTypes.GET_COURSES, payload: data})
//     })
//   }
// };

// export function getCourses () {
//   return function(dispatch) {
//     return axios.get('https://d7d148b1335b.ngrok.io/en/api/v1/courses/')
//     .then(({data}) => {
//       dispatch(getCourses(data))
//     })
//   }
// };

// export const getCourses = () => (dispatch) => {
//   dispatch({
//     type: actionTypes.GET_COURSES,
//     payload: axios.get({
//       url: `${API_URL}/courses`,
//       data: null,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   })
// };

export const getCourses = () => dispatch => {
  axios.get('http://test.thedevs.co/api/v1/courses/', {data: {}}, {
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
      .then(response => response.json())
      .then(data => {
          dispatch({ 
              type: actionTypes.GET_COURSES,
              payload: data
          })
      })
      .catch(error => console.log(error));
};
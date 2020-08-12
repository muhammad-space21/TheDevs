import axios from 'axios';

import actionTypes from '../../../constants/index';

export const init = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_TOKEN,
    payload: axios({
      method: 'POST',
      url: 'http://test.thedevs.co/en/api/v1/dj-rest-auth/login/',
      auth: {
        username: "e-address@bk.ru",
        password: "abubakr"
      },
      data: {}
    })
  })
  response.then((res) => {
    if (res && res.value && res.value.data && res.value.data.key) {
      localStorage.setItem('token', res.value.data.key);
    }
  });
};


export const tokenLocalToRedux = (token) => (dispatch) => {
  dispatch({
    type: actionTypes.WRITE_TOKEN,
    payload: token
  });
};
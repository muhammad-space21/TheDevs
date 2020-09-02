import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';

export const tokenLocalToRedux = (token) => (dispatch) => {
  dispatch({
    type: actionTypes.WRITE_TOKEN,
    payload: token
  });
};


export const init = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_TOKEN,
    payload: axios({
      method: 'POST',
      url: `https://api.thedevs.co/en/api/v1/dj-rest-auth/login/`,
      data: {
        username: "e-address@bk.ru",
        password: "abubakr"
      }
    })
  })
  .then((res) => {
    if (res && res.value && res.value.data && res.value.data.key) {
      localStorage.setItem('token', res.value.data.key);
    }
  });
};
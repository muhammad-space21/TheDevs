import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils/index';

const sendLeadModal = (data) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SEND_LEAD_MODAL,
    payload: axios({
      method: 'POST',
      url: '',
      data,
      headers: getHeaders(getState)
    })
  })
};

export default sendLeadModal;
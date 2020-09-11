import axios from 'axios';

import actionTypes from '../../../constants/actionTypes';

import { getHeadersForm } from '../../../utils/index';

export const sendLeadModal = (bodyFormData) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SEND_LEAD_MODAL,
    payload: axios({
      method: 'POST',
      url: 'http://api.thedevs.co/ru/api/v1/leads/',
      body: bodyFormData,
      headers: getHeadersForm(getState)
      })
  })
};
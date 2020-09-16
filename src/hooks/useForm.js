import  { useState } from 'react';
import axios from 'axios';

// import { getHeadersForm } from '../utils/index';
// import authReducer from '../redux/modules/auth/authReducer.js';

export const useForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone_number: '',
    course: ''
  });


  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('inputs', inputs)
    // send data to API
    var bodyFormData = new FormData();
    Object.entries(inputs).forEach(([key, value]) => {bodyFormData.append(key, value)});

    const config = {
      method: 'POST',
      url: 'https://api.thedevs.co/ru/api/v1/leads/',
      headers: {
        Authorization: `Token e328299157e6d0b9b929026ce97d1f9e0e56a08e`,
        'Content-Type': 'multipart/form-data'
      },
      data: bodyFormData
    };

    console.log(bodyFormData, 'bodyFormData');

    axios(config)
    .then(res => {
      if (res.status === 201) {
        setLoading(false);
        setSuccess(true);
      }
      console.log('res', res)
    })
    .catch(err => {
      setError(true);
      setLoading(false);
      setSuccess(false);
      console.log('error', err)
    });
  };

  // handleChange
  const handleChange = (e) => {
    e.persist();
    setInputs(inputs => (
      {...inputs, [e.target.name]: e.target.value}
    ));
  }

  return {
    loading,
    error,
    inputs,
    success,
    handleSubmit,
    handleChange
  }
};
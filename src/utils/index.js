
export const getHeaders = (getState) => ({
  Authorization: `Token ${getState().authReducer.token}`,
  'Content-type': 'application/json'
});

export const getHeadersForm = (getState) => ({
  Authorization: `Token ${getState().authReducer.token}`,
  'Content-Type': 'multipart/form-data'
});
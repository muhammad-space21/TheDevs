
export const getHeaders = (getState) => ({
  Authorization: `Token ${getState().authReducer.token}`,
  'Content-type': 'application/json'
});
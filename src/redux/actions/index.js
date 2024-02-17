export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = () => ({
  type: REGISTER_REQUEST
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error
});

export const registerUser = (userData) => {
  return (dispatch) => {
    dispatch(registerRequest());

    fetch('http://localhost:4003/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to register user');
        }
        dispatch(registerSuccess());
      })
      .catch(error => {
        dispatch(registerFailure(error.message));
      });
  };
};
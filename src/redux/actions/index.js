export const USER_REGISTERED_SUCCESSFULLY = 'USER_REGISTERED_SUCCESSFULLY';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const registerUser = (userData) => {
  return (dispatch) => {
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
        dispatch({ type: 'USER_REGISTERED_SUCCESSFULLY' });
      })
      .catch(error => {
        console.error('Failed to register user', error);
        dispatch({ type: 'REGISTER_USER_ERROR', error: error.message });
      });
  };
};



export const login = (email, password) => {
  return async (dispatch) => {
    const url = 'http://localhost:4003/auth/login';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: data.token }
        });

        dispatch(fetchUserData(data.token));
      } else {
        if (response.status === 404) {
          dispatch({
            type: LOGIN_FAILURE,
            payload: 'user not found'
          });
        } else {
          throw new Error('Login failed');
        }
      }

    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message
      });
    }
  }
}



export const fetchUserData = (token) => {
  return async (dispatch) => {
    const url = 'http://localhost:4003/users/me';
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.ok) {
        const userdata = await response.json();
        dispatch({
          type: FETCH_USER_DATA_SUCCESS,
          payload: userdata
        });
      }

    }
    catch (error) {
      dispatch({
        type: FETCH_USER_DATA_FAILURE,
        payload: error.message
      });
    }
  }
}







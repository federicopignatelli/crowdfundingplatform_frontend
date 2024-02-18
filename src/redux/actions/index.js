export const REGISTER_REQUEST = 'REGISTER_REQUEST';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

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
      })
      .catch(error => {
      });
  };
};


export const login = (email, password) => {
  return async (dispatch) => {
    const url = 'http://localhost:4003/auth/login';
    try {
      const token = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (token.ok) {
        localStorage.setItem('token', token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: token
        });
      }

    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      });
    }
  }
}



export const fetchdata = (token) => {
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
          type: FETCH_DATA_SUCCESS,
          payload: userdata
        });
      }

    }
    catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error.message
      });
    }
  }
}



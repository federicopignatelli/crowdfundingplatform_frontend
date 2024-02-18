export const REGISTER_REQUEST = 'REGISTER_REQUEST';


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
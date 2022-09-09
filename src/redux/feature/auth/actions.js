import { authenticated, loading, error, loggedOut } from './authSlice';

export const authenticateUser = (credentials) => (dispatch) => {
  dispatch(loading());
  fetch("https://631abbe6dc236c0b1ee329c1.mockapi.io/login",
    {
      method: "POST",
      body: credentials
    }
  ).then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch(authenticated(json));
    })
    .catch((errorResponse) => {
      dispatch(error('Invalid credentials'));
    });
  // const { email, password } = credentials;
  // dispatch(loading());
  // if (email === 'foo@bar.com' && password === 'demo') {
  //   const user = {
  //     email: 'foo@bar.com',
  //     name: 'Foo Bar'
  //   }
  //   dispatch(authenticated(user));
  // } else {
  //   dispatch(error('Invalid credentials'));
  // }
}

export const logout = () => (dispatch) => {
  dispatch(loggedOut());
}
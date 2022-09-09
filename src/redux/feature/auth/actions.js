import { authenticated, loading, error, loggedOut } from './authSlice';

export const authenticateUser = (credentials) => (dispatch) => {
  const { email, password } = credentials;
  dispatch(loading());
  if (email === 'foo@bar.com' && password === 'demo') {
    const user = {
      email: 'foo@bar.com',
      name: 'Foo Bar'
    }
    dispatch(authenticated(user));
  } else {
    dispatch(error('Invalid credentials'));
  }
}

export const logout = () => (dispatch) => {
  dispatch(loggedOut());
}
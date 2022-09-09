import { configureStore } from "@reduxjs/toolkit";
import testReducer from '../redux/feature/test/testSlice';
import authReducer from '../redux/feature/auth/authSlice';

export default configureStore({
  reducer: {
    test: testReducer,
    auth: authReducer
  }
});
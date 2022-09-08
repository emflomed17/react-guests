import { configureStore } from "@reduxjs/toolkit";
import testReducer from '../redux/feature/test/testSlice';

export default configureStore({
  reducer: {
    test: testReducer,
    // users: usersRedcer,
    // products: productsReducer,
  }
});
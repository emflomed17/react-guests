import { createSlice } from "@reduxjs/toolkit";
import { asyncLogin } from "./actions";

const initialUser = {
  user: {
    email: "",
    name: "",
  },
};

const loggedUser = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: loggedUser ?? initialUser,
    // user,
    isAuthenticated: false,
    isLoading: false,
    error: "",
  },
  reducers: {
    authenticated: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = "";
      const loggedUser = action.payload;
      state.user = loggedUser;
      localStorage.setItem("user", loggedUser);
    },
    error: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loading: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
      state.user = initialUser;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    // builder.addCase(OTHER_FUNCTION.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(OTHER_FUNCTION.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = true;
    //   localStorage.setItem("user", action.payload);
    //   state.user = action.payload;
    // });
    // builder.addCase(OTHER_FUNCTION.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload.message;
    // });
  },
});

export const { authenticated, error, loading, loggedOut } = authSlice.actions;
export default authSlice.reducer;

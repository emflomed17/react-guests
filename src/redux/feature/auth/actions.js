import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticated, loading, error, loggedOut } from "./authSlice";

export const authenticateUser = (credentials) => (dispatch) => {
  dispatch(loading());
  fetch("https://631abbe6dc236c0b1ee329c1.mockapi.io/login", {
    method: "POST",
    body: credentials,
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch(authenticated(json));
    })
    .catch((errorResponse) => {
      dispatch(error("Invalid credentials"));
    });
};

export const asyncLogin = createAsyncThunk(
  "auth/asyncLogin",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(
        "https://631abbe6dc236c0b1ee329c1.mockapi.io/login",
        {
          method: "POST",
          body: credentials,
        }
      );
      const json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log("Error en login", err);
      return thunkAPI.rejectWithValue("Invalid credentials");
    }
  }
);

export const logout = () => (dispatch) => {
  dispatch(loggedOut());
};

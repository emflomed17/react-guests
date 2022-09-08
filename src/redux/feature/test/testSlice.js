import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    userName: 'luis'
  },
  reducers:{
    setUserName: (state, action) => {
      state.userName = action.payload;
    }
  }
});

export const { setUserName } = testSlice.actions;
export default testSlice.reducer;
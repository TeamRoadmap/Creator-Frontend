import { createSlice } from "@reduxjs/toolkit";
import { signUpHandler } from "./thunk";

const initialState = {
  user: {}, // contain all the user's data in object in short (users janam kundali)
  token: "",
  isAuth: false,
  loading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpHandler.rejected, (state) => {
        state.loading = false;
        state.user = undefined;
      });
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

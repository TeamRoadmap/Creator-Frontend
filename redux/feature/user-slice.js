import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}, // contain all the user's data in object in short (users janam kundali)
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

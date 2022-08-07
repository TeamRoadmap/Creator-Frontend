import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const signUpHandler = createAsyncThunk(
  "user/user-signup",
  async (signUpData) => {
    try {
      const res = await axios.post(
        "https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/test",
        {
          ...signUpData,
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const signUpHandler = createAsyncThunk(
  "user/user-signup",
  async (signUpData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`,
        {
          ...signUpData,
        }
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loginHandler = createAsyncThunk(
  "user/user-login",
  async ( token ,{ rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

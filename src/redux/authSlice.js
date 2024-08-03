import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/axios";

export const loginUser =
  ({ email, otp }) =>
  async (dispatch) => {
    dispatch(loginPending());
    try {
      const response = await api.post("/auth/login", {
        email,
        otp,
        opType: "VERIFY_OTP",
      });
      const token = response.data.responseData.data;
      localStorage.setItem("token", token);
      dispatch(loginSuccess({ token }));
    } catch (error) {
      console.error("Login error:", error.response.data);
      dispatch(loginFailure(error.response.data));
    }
  };

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    loginSuccess: false,
  },
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.loginSuccess = true;
    },
    resetLoginSuccess: (state) => {
      state.loginSuccess = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const {
  loginPending,
  loginSuccess,
  resetLoginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
  address: string;
  area: string;
  city: string;
  state: string;
  country: string;
}

interface User {
  type: "Normal" | "Emergency";
  username: string;
  email: string;
  phoneNumber: string;
  bloodGroup: string;
  gender: string;
  address: Address;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.isAuthenticated = false;
      state.user = action.payload;
    },
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, register, updateUser } = authSlice.actions;

export default authSlice.reducer;

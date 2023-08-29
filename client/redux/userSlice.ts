import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

interface UserState {
  currentUser: User;
}

const initialState: UserState = {
  currentUser: {
    type: "Normal",
    username: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    gender: "",
    address: {
      address: "",
      area: "",
      city: "",
      state: "",
      country: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = initialState.currentUser;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;

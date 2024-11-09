import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    userEmail: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    userEmail: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ userEmail: string }>) => {
            state.isLoggedIn = true;
            state.userEmail = action.payload.userEmail;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.userEmail = null;
        },
    },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

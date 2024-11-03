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
        setUser: (state, action: PayloadAction<{ accessToken: string; refreshToken: string; userEmail: string }>) => {
            state.isLoggedIn = true;
            state.userEmail = action.payload.userEmail;
        },
        clearUser: (state) => {
            state.isLoggedIn = false;
            state.userEmail = null;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

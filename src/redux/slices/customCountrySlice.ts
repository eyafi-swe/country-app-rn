import { CustomCountryItem } from '../../types/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomCountryState {
    countries: CustomCountryItem[];
    addableCountryName: string;
    addableCountryLat: number;
    addableCountryLng: number;
    addableCountryPopulation: number;
}

const initialState: CustomCountryState = {
    countries: [],
    addableCountryName: "",
    addableCountryLat: 0,
    addableCountryLng: 0,
    addableCountryPopulation: 0,
};

const customCountrySlice = createSlice({
    name: "customCountry",
    initialState,
    reducers: {
        addCountry(state, action: PayloadAction<CustomCountryItem>) {
            state.countries.push(action.payload);
        },
        removeCountry(state, action: PayloadAction<string>) {
            state.countries = state.countries.filter((country) => country.id !== action.payload);
        },
        editCountry(state, action: PayloadAction<CustomCountryItem>) {
            const index = state.countries.findIndex((country) => country.id === action.payload.id);
            state.countries[index] = action.payload;
        },
        setAddableCountryName(state, action: PayloadAction<string>) {
            state.addableCountryName = action.payload;
        },
        setAddableCountryLat(state, action: PayloadAction<number>) {
            state.addableCountryLat = action.payload;
        },
        setAddableCountryLng(state, action: PayloadAction<number>) {
            state.addableCountryLng = action.payload;
        },
        setAddableCountryPopulation(state, action: PayloadAction<number>) {
            state.addableCountryPopulation = action.payload;
        },
        clearAddableCountryStates(state) {
            state.addableCountryName = "";
            state.addableCountryLat = 0;
            state.addableCountryLng = 0;
            state.addableCountryPopulation = 0;
        },
    },
});

export const {
    addCountry,
    removeCountry,
    editCountry,
    setAddableCountryName,
    setAddableCountryLat,
    setAddableCountryLng,
    setAddableCountryPopulation,
    clearAddableCountryStates,
} = customCountrySlice.actions;

export default customCountrySlice.reducer;

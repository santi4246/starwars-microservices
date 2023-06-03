import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        getCharacters: (state, action) => {
            return { ...state, characters: action.payload }
        }
    }
});


// Se exportan del objeto createSlice la propiedad actions y el reducer
export const { getCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
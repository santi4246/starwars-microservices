import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        characters: []
    },
    reducers: {
        getCharacters: (state, action) => {            
            return { ...state, characters: action.payload.data }
        }
    }
});


// Se exportan del objeto createSlice la propiedad actions y el reducer
export const { getCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
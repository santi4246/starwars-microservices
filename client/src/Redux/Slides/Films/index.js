import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: []
    },
    reducers: {
        getFilms: (state, action) => {
            return { ...state, films: action.payload.data }
        }
    }
});

export const { getFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
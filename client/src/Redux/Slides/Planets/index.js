import { createSlice } from "@reduxjs/toolkit";

export const planetsSlice = createSlice({
    name: "planets",
    initialState: {
        planets: []
    },
    reducers: {
        getPlanets: (state, action) => {
            return { ...state, planets: action.payload.data }
        }
    }
});

export const { getPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;
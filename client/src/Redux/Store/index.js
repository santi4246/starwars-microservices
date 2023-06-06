import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../Slides/Characters";
import filmsReducer from "../Slides/Films";
import planetsReducer from "../Slides/Planets";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        films: filmsReducer,
        planets: planetsReducer
    }
});
import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../Slides/Characters";

export const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
});
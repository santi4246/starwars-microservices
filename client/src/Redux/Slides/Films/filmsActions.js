import axios from "axios";
import { getFilms } from "./index";

export const getAllFilms = () => {
    return async (dispatch) => {
        try {
            const films = await axios.get(`/films`);
            return dispatch(getFilms(films.data.data));
        } catch (error) {
            return error;
        }
    }
}
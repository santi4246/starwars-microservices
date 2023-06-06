import axios from "axios";
import { getCharacters } from "./index";

export const getAllCharacters = () => {
    return async (dispatch) => {
        try {
            const characters = await axios.get(`/characters`);
            return dispatch(getCharacters(characters.data.data));
        } catch (error) {
            return error;            
        }
    }
}
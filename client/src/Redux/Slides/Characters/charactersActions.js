import axios from "axios";
import { getCharacters } from "./index";

export const getAllCharacters = () => {
    return async function (dispatch) {
        return fetch(`54.221.191.223:3001`)
        .then(response => response.json())
        .then(data => dispatch(getCharacters(data)))
        .catch(error => console.log(error))
    }
}
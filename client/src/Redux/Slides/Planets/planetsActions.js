import axios from "axios";
import { getPlanets } from "./index";

export const getAllPlanets = () => {
    return async (dispatch) => {
        try {
            const planets = await axios.get(`/planets`);
            return dispatch(getPlanets(planets.data.data));
        } catch (error) {
            return error;
        }
    }
}
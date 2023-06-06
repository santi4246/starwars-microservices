import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlanets } from "../../Redux/Slides/Planets/planetsActions";

export const Home = () => {
    const planets = useSelector(state => state.planets);
    console.log("Planets: ", planets);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPlanets());
    }, [dispatch]);
    return (
        <div className="App">
            <h3>App Star Wars</h3>            
        </div>        
    )
}
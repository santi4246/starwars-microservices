import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../Redux/Slides/Characters/charactersActions";

export const Home = () => {
    const characters = useSelector(state => state.characters);
    console.log("Characters: ", characters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCharacters());
    }, [dispatch]);
    return (
        <div className="App">
            <h3>App Star Wars</h3>            
        </div>        
    )
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../Redux/Slides/Characters/charactersActions";

export const Home = () => {
    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();
    useEffect(() => {        
        dispatch(getAllCharacters());
        console.log("characters: ", characters);
    }, [dispatch, characters]);    
    return (
        <div className="App">
            <h3>App Star Wars</h3>
        </div>        
    )
}
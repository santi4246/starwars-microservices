import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import axios from "axios";
axios.defaults.baseURL = "http://54.221.191.223:3001";

function App() {
  return(
    <Routes>
      <Route exact path = "/" Component = { Home }/>
    </Routes>
  )    
}

export default App;
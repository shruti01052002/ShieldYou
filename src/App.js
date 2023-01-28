import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Features from "./Features";
import Caliberate from "./Caliberate";
import SignUp from './SignUp';
import Login from "./Login";

const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/caliberate" element={<Caliberate />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>
    );
}
export default App;
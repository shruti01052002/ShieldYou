import React from "react";
import logo from './images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div>
                <img src={logo} alt="..." style={{ float:"left" }} />
                <div className="home_div">
                <NavLink exact to='/' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>HOME</NavLink> &nbsp; &nbsp;
                <NavLink to='/features' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>FEATURES</NavLink> &nbsp; &nbsp;
                <NavLink exact to='/defense' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>CALIBERATE</NavLink> &nbsp; &nbsp;
                <NavLink exact to='/feed' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>FEED</NavLink> &nbsp; &nbsp;
                </div>
                <div className="login_div">
                <NavLink exact to='/login' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>LOGIN</NavLink> &nbsp; &nbsp;
                <NavLink to='/signup' style={{textDecoration:"none", color:"white", fontSize:"20px", fontFamily: 'League Spartan, sans-serif'}}>SIGNUP</NavLink> &nbsp; &nbsp;
                </div>
            </div>
        </>
    );
}
export default Nav;
import React from "react";
import Nav from "./Nav";

const Home = () => {
    
    return (
        <>
            <div className="home_class"  style={{marginTop:'0', paddingTop:'0'}}>
                <Nav/>
                <h1 style={{paddingTop:'500px', color:"white", textAlign:'center', fontFamily: 'League Spartan, sans-serif', fontSize:'100px'}}>Be Your <span style={{color:"#f9ef23"}}>Shield</span></h1>
            </div>
        </>
    );
}
export default Home;
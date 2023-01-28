import React from "react";
import Nav from "./Nav";
import ImageSlider from "./ImageSlider";

const Features = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
        <div style={{backgroundColor:'black', height:"100vh"}}>
        <Nav/>
        <div className="nav_rows">
            <div className="nav_col">
                <div className="nav_cont">
                    <div className="nav_links">
                        <h1 style={{color:"white", paddingLeft:"250px", paddingTop:"150px"}}>WHAT WE <span style={{color:"#f9ef23"}}>OFFER</span></h1>
                        <p style={{color:"white", paddingLeft:"150px", paddingTop:"30px", textAlign:"justify", paddingRight:"100px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                    </div>
                </div>
            </div>
            <div className="nav_col">
                <div style={{paddingTop:"100px"}}>
                    <ImageSlider/>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Features;
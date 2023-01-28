import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Caliber from "./images/Caliber.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const image = [
    {
        id:"1",
        src:Caliber,
        alt:"hello",
        val: "Caliberation"
    },
    {
        id:"2",
        src:Caliber,
        alt:"hello",
        val: "Contribute"
    },
    {
        id:"3",
        src:Caliber,
        alt:"hello",
        val: "Caliberation"
    }
]

const ImageSlider = () => {
  
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
      <div className="imgslider">
        <Slider {...settings} style={{overflowY:'hidden'}}>
          {image.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
              <h1 style={{color:"white", paddingLeft:"150px"}}>{item.val}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default ImageSlider;
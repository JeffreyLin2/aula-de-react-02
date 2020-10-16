import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import slides from "./slide.json";
import './style.css';


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        adaptativeHeight:false,
        autoplay:true,
        autoplaySpeed:2000,
        arrows: false,
        className:'simple-slider',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="meu-slider">
          <h2> Meu Slider</h2>
          <Slider {...settings}>
           {slides.map((item,index) => { 
               return (
               <img 
               src={item.imgSrc} 
               key={index}
               alt={`Esse é o meu slide ${item.id+1}`}
               height="auto"
               width="100%"
              />)
           })}
          </Slider>
        </div>
      );
    }
  }
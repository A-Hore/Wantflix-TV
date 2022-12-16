import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../Images/first.png";
import second from "../../Images/second.png";
import fourth from "../../Images/fourth.png";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div style={{ marginTop: "50px" }}>
            <img src={first} alt="" />
          </div>
          <div style={{ marginTop: "50px" }}>
            <img src={second} alt="" />
          </div>
          <div style={{ marginTop: "50px" }}>
            <img src={fourth} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

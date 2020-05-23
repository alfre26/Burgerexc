import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
      ]
    };
    return (
      <Slider className="slider" {...settings}>
        <Card
          fecha={"25-april-2020"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."
          }
        />
        <Card
          fecha={"01-april-2020"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."
          }
        />
        <Card
          fecha={"10-may-2020"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."
          }
        />
        <Card
          fecha={"15-june-2020"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa."
          }
        />
      </Slider>
    );
  }
}

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

export default class SimpleSlider extends React.Component {
  render() {
    return (
      <Slider className="slider" {...settings}>
        {info.map((items, index) => (
          <Card key={index} fecha={items.fecha} text={items.text} />
        ))}
      </Slider>
    );
  }
}
const settings = {
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
      breakpoint: 1330,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const info = [
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
  {
    fecha: "25-april-2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis consectetur diam vel elementum, ut massa.",
  },
];

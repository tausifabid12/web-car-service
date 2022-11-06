import React from "react";
import img1 from "../../assets/images/homeCarousel/1.jpg";
import img2 from "../../assets/images/homeCarousel/2.jpg";
import img3 from "../../assets/images/homeCarousel/3.jpg";
import img4 from "../../assets/images/homeCarousel/4.jpg";
import HeroSlides from "./HeroSlides";

const Hero = () => {
  const sliderData = [
    {
      image: img1,
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 2,
    },
  ];

  return (
    <div className="carousel w-full">
      {sliderData.map((slider) => (
        <HeroSlides key={slider.id} slider={slider}></HeroSlides>
      ))}
    </div>
  );
};

export default Hero;

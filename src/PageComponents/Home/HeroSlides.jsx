import React from "react";

const HeroSlides = ({ slider }) => {
  const { image, prev, next } = slider;
  console.log(slider);
  return (
    <div
      id={`slider${slider.id}`}
      className="carousel-item relative w-full max-h-screen "
    >
      <div className="min-w-full min-h-full rounded-lg bg-gradient-to-r from-black to-transparent opacity-90"></div>
      <img
        src={image}
        className="min-w-full h-full  rounded-lg"
        alt="hero-img"
      />
      <div className="absolute space-y-7  justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className="text-5xl font-bold text-white z-10 mb-4">
          Affordable Price for Car{" "}
        </h1>
        <h1 className="text-5xl font-bold text-white z-10 mb-4">Servicing</h1>
        <p className="text-white ">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsa,
          optio eveniet nostrum accusantium a nobis
        </p>
        <button className="btn btn-warning mr-4">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div
        className={
          "absolute flex  transform -translate-y-1/2  right-5 bottom-8 "
        }
      >
        <a href={`#slider${prev}`} className="btn btn-circle ">
          ❮
        </a>
        <a
          href={`#slider${next}`}
          className="btn btn-circle bg-warning border-none ml-3"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default HeroSlides;

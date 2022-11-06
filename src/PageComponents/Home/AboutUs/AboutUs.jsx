import React from "react";
import aboutImg1 from "../../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero  py-32">
      <div className="hero-content h-full w-full grid sm:grid-cols-1 md:grid-cols-2 ">
        <div className="h-full relative ">
          <img
            src={aboutImg1}
            className="md:w-10/12 h-full rounded-lg shadow-2xl "
            alt=""
          />
          <img
            src={aboutImg2}
            className="absolute left-1/2 top-1/2 hidden md:block w-1/2 h-3/4 rounded-lg shadow-2xl "
            alt=""
          />
        </div>

        <div className=" h-full p-4 ">
          <h2 className="text-[#fd3811] font-bold text-xl pb-2">About us</h2>
          <h1 className="text-4xl font-bold">
            We are qualified <br /> & of experience <br />
            in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#fd3811] border-none my-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { title, price, img, _id } = service;
  console.log(service, "this is service");
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="min-h-4/5 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions text-2xl font-bold text-[#fd3811]  justify-between">
          <p>{price}</p>
          <Link to={`/services/checkOut/${_id}`} className="">
            <FaArrowCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

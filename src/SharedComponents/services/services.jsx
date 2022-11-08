import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ServicesCard from "./ServicesCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  console.log(serviceData, "form data");
  return (
    <div>
      <div className="mx-auto text-center w-1/2 py-12 space-y-4">
        <h4 className="text-[#fd3811] font-bold">Service</h4>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-8">
        {serviceData.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

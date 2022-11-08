import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../constexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const { user } = useContext(AuthContext);

  const serviceDetail = useLoaderData();
  const { title, _id } = serviceDetail;
  console.log(user?.email);
  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.firstName.value + form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    setOrderInfo({ fullName, email, phone, message, serviceId: _id });

    console.log(orderInfo);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("order placed successfully");
        e.target.reset();
        console.log(data);
      });
  };

  return (
    <div className=" w-full ">
      <div
        className="h-72 w-full rounded-md grid place-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${checkoutImg})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className=" text-white font-bold  text-5xl">Check Out</h2>
      </div>
      <h3 className="text-4xl text-[#fd3811] font-bold text-center pt-5">
        Service Name:{title}
      </h3>
      <form
        onSubmit={handleOrderSubmit}
        className="w-3/4 my-20 p-16 rounded-lg mx-auto bg-base-200"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 ">
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="email"
            value={user?.email || "Unknown@known.com"}
            placeholder="email"
            className="input input-bordered w-full"
            readOnly
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            className="textarea col-span-2 textarea-bordered w-full"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn bg-[#fd3811] border-none w-full my-6"
        >
          {" "}
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;

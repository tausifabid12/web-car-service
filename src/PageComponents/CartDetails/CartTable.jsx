import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CartTable = ({ order, orderData, handleDelete }) => {
  const { serviceId, _id } = order;
  const [services, setServiceData] = useState([]);
  console.log(services, "this is services");
  console.log(order, "this is order");

  const { price, img, title } = services;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [serviceId]);

  console.log(services, "from services");
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-gray-500 w-8 h-8 rounded-full text-white font-light"
        >
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-20 h-20">
              <img src={img && img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </td>
      <td>${price}</td>
      <th>
        <button className="btn bg-[#fd3811] btn-sm border-none">Pending</button>
      </th>
    </tr>
  );
};

export default CartTable;

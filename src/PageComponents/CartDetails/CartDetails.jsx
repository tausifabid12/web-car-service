import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import cartImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../constexts/AuthProvider/AuthProvider";
import CartTable from "./CartTable";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);
  // const { serviceId } = orderData;

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div
        className="h-72 w-full rounded-md grid place-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cartImg})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className=" text-white font-bold  text-5xl">Cart</h2>
      </div>
      <div className="my-20 w-full">
        <table className="table w-full">
          <tbody className="text-center ">
            {orderData.map((order) => (
              <CartTable
                key={order._id}
                order={order}
                orderData={orderData}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartDetails;

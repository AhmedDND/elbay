import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://media.discordapp.net/attachments/912399918214303775/912993385143500830/adadad.png?width=1440&height=112"
          alt=""
        />

        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;

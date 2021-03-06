import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
    </div>
  );
};

const ShowNothing = () => {
  return (
    <div>
      <div>None</div>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <div class="header-template">
        <a href=" ">
          <div class="logo-text ">TheFoxxStuff</div>
        </a>
      </div>
      <FaShoppingCart
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
        className={`cart ${cartOpen && "active"}`}
      />
      {cartOpen && (
        <div>
          <div class="h1-text">Cart</div>
          {props.orders.length > 0 ? showOrders(props) : ShowNothing()}
        </div>
      )}
    </div>
  );
}

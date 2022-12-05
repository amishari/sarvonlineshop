import "./style.css";
import React from "react";
import Price from "./Price.js";
import CartBuy from "./CartBuy";

export default function Buttons(props) {
  let price = props.buttons;
  return (
    <div className="buttons">
      <Price price={price} />
      <CartBuy />
    </div>
  );
}

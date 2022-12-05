import "./style.css";
import React from "react";

export default function Price(props) {
  let price = props.price.price;
  return (
    <div className="right">
      <span className="price">{price} ریال</span>
    </div>
  );
}

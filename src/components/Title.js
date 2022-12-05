import "./style.css";
import React from "react";

export default function Title(props) {
  let title = props.title.title;
  return <div className="title">{title}</div>;
}

import React from "react";
import ShoppingCard from "./Shopping-card";
const List = (props) => {
  let searchedTerm = <p>Nothing found!</p>;
  if (props.list.length > 0) {
    searchedTerm = props.list.map((item) => {
      return <ShoppingCard card={item} />;
    });
  }
  return <div>{searchedTerm}</div>;
};

export default List;

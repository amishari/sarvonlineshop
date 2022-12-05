import React from "react";
export default function Search(props) {
  return (
    <form action="" id="search-form">
      <input type="text" placeholder="search ..." onChange={props.onSearch} />
    </form>
  );
}

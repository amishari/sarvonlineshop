import React, { useState } from "react";
import products from "./products-short.json";
import ShoppingCard from "./components/Shopping-card.js";
import Search from "./components/Search.js";
import List from "./components/List.js";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< HEAD
  const searchedItems = products.filter((product) => {
    return (
      product.title.includes(searchTerm) || product.id.includes(searchTerm)
    );
  });
=======
	const searchedItems = products.filter((product) => {
		return (
			product.title.includes(searchTerm) || product.id.includes(searchTerm)
		);
	});
>>>>>>> cd00a1f5dbe241b9ea819be72a15f241829e68d9

  return (
    <div className="App">
      <Search search={searchTerm} onSearch={handleSearch} />

      <List list={searchedItems} />
    </div>
  );
}

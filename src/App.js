import { useState } from "react";
import products from "./products-short.json";
import ShoppingCard from "./components/Shopping-card.js";
import Search from "./components/Search.js";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

	const searchedItems = products.filter((product) => {
		return (
			product.title.includes(searchTerm) || product.id.includes(searchTerm)
		);
	});

  return (
    <div className="App">
      <Search search={searchTerm} onSearch={handleSearch} />

      {searchedItems.map((item) => {
        return <ShoppingCard card={item} />;
      })}
    </div>
  );
}

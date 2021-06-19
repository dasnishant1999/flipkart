import React, { createContext, useState } from "react";
import data from "../data/products";

export const ProductsContext = createContext();

function ProductsDataLayer({ children }) {
  const [products, setproducts] = useState(data);

  function priceSort(value) {
    const copy = [...products];
    if (value == 0) {
      let sortedProducts = copy.sort((a, b) => {
        return a.price - b.price;
      });
      setproducts(sortedProducts);
    } else {
      let sortedProducts = copy.sort((a, b) => {
        return b.price - a.price;
      });
      setproducts(sortedProducts);
    }
  }

  function filterSize(value) {
    const copy = [...data];
  }

  const value = {
    products,
    setproducts,
    priceSort,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsDataLayer;

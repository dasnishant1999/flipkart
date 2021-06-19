import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsDataLayer";
import "../styles/Products.css";
import Product from "./Product";

function Products() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products">
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
}

export default Products;

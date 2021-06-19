import React from "react";
import "../styles/Product.css";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.imageUrl} alt="clothes"></img>
      <p>{product.name}</p>
      <p>Rs. {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Size: {product.size}</p>
    </div>
  );
}

export default Product;

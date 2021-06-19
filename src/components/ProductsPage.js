import React from "react";
import Sidebar from "./Sidebar";
import Products from "./Products";
import "../styles/ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-page">
      <Sidebar />
      <Products />
    </div>
  );
}

export default ProductsPage;

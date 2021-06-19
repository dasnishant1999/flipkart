import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsDataLayer";
import "../styles/Sidebar.css";

function Sidebar() {
  const { products, setproducts, priceSort } = useContext(ProductsContext);

  function handlePriceChange(e) {
    const { value } = e.target;
    priceSort(value);
  }

  function handleSizeChange(e) {
    const { value } = e.target;
  }

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <hr />
      <div className="price">
        <p>Price</p>
        <div className="price-radio">
          <input
            type="radio"
            name="price"
            value={0}
            onChange={handlePriceChange}
          />
          <label>Low to High</label>
        </div>
        <div className="price-radio">
          <input
            type="radio"
            name="price"
            value={1}
            onChange={handlePriceChange}
          />
          <label>High to Low</label>
        </div>
        <hr />
      </div>
      <div className="size">
        <p>Size</p>
        <div className="size-checkbox">
          <input
            type="checkbox"
            name="small"
            value="S"
            onChange={handleSizeChange}
          />
          <label>Small</label>
        </div>
        <div className="size-checkbox">
          <input
            type="checkbox"
            name="medium"
            value="M"
            onChange={handleSizeChange}
          />
          <label>medium</label>
        </div>
        <div className="size-checkbox">
          <input
            type="checkbox"
            name="large"
            value="L"
            onChange={handleSizeChange}
          />
          <label>Large</label>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Sidebar;

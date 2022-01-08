import React from "react";
import "./styles/Products.css";

import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  let navigate = useNavigate();
  return (
    <div className="products__container">
      {products.map((product, i) => {
        return (
          <div key={i} className="product">
            <img src={product.img} className="product__img" />
            <h1 className="product__label">{product.label}</h1>
            <p className="product__price">{product.price} Rs</p>
            <button
              className="product__btn"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

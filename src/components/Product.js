import React, { useState } from "react";
import "./styles/Product.css";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/action";

const Product = ({ products }) => {
  let { id } = useParams();
  let [showAddBtn, setShowAddBtn] = useState(true);

  let dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowAddBtn(false);
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    setShowAddBtn(true);
  };

  return (
    <>
      {products.map((product, i) => {
        if (product.id == id) {
          return (
            <div key={i} className="singleProduct__container">
              <img src={product.img} className="singleProduct__img" />
              <h1 className="singleProduct__label">{product.label}</h1>
              <p className="singleProduct__price">{product.price} Rs</p>
              <p className="singleProduct__quantity">
                Quantity : {product.quantity}
              </p>
              {showAddBtn ? (
                <button
                  className="singleProduct__addbtn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="singleProduct__removebtn"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default Product;

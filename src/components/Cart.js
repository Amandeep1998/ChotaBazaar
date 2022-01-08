import React, { useEffect, useState } from "react";
import "./styles/Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/actions/action";

const Cart = () => {
  let cart = useSelector((state) => state.cartReducer.cart);
  let dispatch = useDispatch();

  let [totalPrice, setTotalPrice] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let total = cart.reduce((sum, current) => {
      return (sum += current.price);
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePurchase = () => {
    if (cart.length !== 0) {
      navigate("/summary");
    } else {
      alert("Cart is Empty");
    }
  };

  return (
    <div className="cart__container">
      <div className="cart__productList">
        {cart.length !== 0 ? (
          cart.map((product, i) => {
            return (
              <div key={i} className="cart__product">
                <img src={product.img} className="cart__img" />
                <h3 className="cart__label">{product.label}</h3>
                <p className="cart__price">{product.price}</p>
                <button
                  className="cart__remove"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <h3>Empty</h3>
        )}
      </div>
      <div className="cart__totalPrice">
        <h1>Total Price</h1>
        {cart.map((product, i) => {
          return (
            <p key={i} className="totalprice__productlabel">
              {product.label}
              {" -> "}
              <span className="totalprice__productprice">
                {product.price} Rs
              </span>
            </p>
          );
        })}
        <hr />
        <p className="totalprice__total">{totalPrice} Rs</p>
        <hr />
        <button className="purchase" onClick={() => handlePurchase()}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;

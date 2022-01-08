//Third-Party libraries
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Summary from "./components/Summary";

//JSON data
import allProducts from "./backend/products.json";

const App = () => {
  let [products, setProducts] = useState(allProducts);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product products={products} />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default App;

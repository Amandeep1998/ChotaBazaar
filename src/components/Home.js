import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__heading">Welcome to ChotaBazaar</h1>
        <button className="home__btn" onClick={() => navigate("/products")}>
          View Products
        </button>
      </div>
    </div>
  );
};

export default Home;

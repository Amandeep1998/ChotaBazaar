import React, { useEffect } from "react";
import "./styles/Summary.css";

import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/action";

const datefns = require("date-fns");

const Summary = () => {
  let date = new Date();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, []);
  return (
    <div className="summary">
      <h1>
        Thanks for Purchasing! Your product is ordered on{" "}
        <span>{date.toDateString()} </span>
        and will be delivered by{" "}
        <span>{datefns.addDays(date, 7).toDateString()}</span>
      </h1>
    </div>
  );
};

export default Summary;

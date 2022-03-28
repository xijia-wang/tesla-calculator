import React, { VFC } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo from "./logo.svg";

const HomePage: VFC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/calculator");
  };

  return (
    <div className="home-page">
      <img src={logo} className="logo" />
      <p>
        This is a calculator to help you estimate how soon you will reach the
        break-even point after you switch to a Tesla from a gasoline car.
      </p>
      <button onClick={handleOnClick}>Start!</button>
    </div>
  );
};

export default HomePage;

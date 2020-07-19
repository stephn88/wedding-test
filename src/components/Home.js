import React from "react";
import "../css/home.css";
import Nav from "./Nav";
import Countdown from "./Countdown";
import couple from "../images/couple-fairy-lights.jpg";

function Home() {
  return (
    <div className="">
      <Nav />
      <h1>Home</h1>
      <img src={couple} alt="bride and groom under fairy lights" />
      <Countdown />
    </div>
  );
}

export default Home;

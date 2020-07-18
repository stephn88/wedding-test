import React from "react";
/ /import "App.css";
import Nav from "./Nav";
import Countdown from "./Countdown";

function Home() {
  return (
    <div className="parallax">
      <Nav />
      <h1>Home</h1>
      <img
        src="/images/couple-fairy-lights.jpg"
        alt="bride and groom under fairy lights"
      />
      <Countdown />
    </div>
  );
}

export default Home;

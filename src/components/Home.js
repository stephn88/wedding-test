import React from "react";
import "../App.css";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <img
        src="/images/couple-fairy-lights.jpg"
        alt="bride and groom under fairy lights"
      />
    </div>
  );
}

export default Home;

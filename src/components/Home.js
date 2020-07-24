import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Countdown from "./Countdown";
import Footer from "./Footer";
import couple from "../images/couple-fairy-lights.jpg";

function Home() {
  return (
    <div className="">
      <Header />
      <Nav />
      <img src={couple} alt="bride and groom under fairy lights" width="100%" />
      <Countdown />
      <Footer />
    </div>
  );
}

export default Home;

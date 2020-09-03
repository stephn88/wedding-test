import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Countdown from "./Countdown";
import couple from "./couple-fairy-lights.jpg";

function Home() {
  return (
    <div className="">
      <Header />
      <Nav />
      <div className="home">
        <div className="countdown-container">
          <Countdown />
        </div>
        <img
          src={couple}
          alt="bride and groom under fairy lights"
          width="100%"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

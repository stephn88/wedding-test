import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import breathe from "./breathe.jpg";

function Relaxation() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="relaxation-container">
        <h1>Relaxation</h1>
        <img
          src={breathe}
          alt="breathe in neon surrounded by foliage"
          width="100%"
        />
        <h3>
          Wedding planning can be stressful. When you start to feel overwhelmed,
          breathe in sync with this.
        </h3>
        <a href="https://www.duffthepsych.com/stopanxiety/">Image source</a>

        <img
          src="https://www.duffthepsych.com/wp-content/uploads/2015/02/breathe-gif.gif"
          alt="breathing exercise for anxiety"
          width="100%"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Relaxation;

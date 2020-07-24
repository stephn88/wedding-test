import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Header from "./Header";
import breathe from "../images/breathe.jpg";

function Relaxation() {
  return (
    <div>
      <Header />
      <Nav />
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
      <br />
      <img
        src="https://www.duffthepsych.com/wp-content/uploads/2015/02/breathe-gif.gif"
        alt="breathing exercise for anxiety"
        width="100%"
      />

      <Footer />
    </div>
  );
}

export default Relaxation;

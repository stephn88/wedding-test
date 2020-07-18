import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
//import "../App.css";

function Relaxation() {
  return (
    <div>
      <Nav />
      <h1>Relaxation</h1>
      <img
        src="./images/breathe.jpg"
        alt="breathe in neon surrounded by foliage"
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
      />
      <Footer />
    </div>
  );
}

export default Relaxation;

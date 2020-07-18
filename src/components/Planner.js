import React from "react";
import "../App.css";
//import Tasklist from "./Tasklist";
import Nav from "./Nav";
import Footer from "./Footer";

function Planner() {
  return (
    <div>
      <Nav />
      <h1>Planner</h1>
      <img src="/images/groom-laugh.jpg" alt="groom laughing" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Habitasse platea
        dictumst vestibulum rhoncus est. Adipiscing enim eu turpis egestas.
        Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Urna nec
        tincidunt praesent semper feugiat nibh sed. Quis imperdiet massa
        tincidunt nunc. Lectus proin nibh nisl condimentum id venenatis.
        Imperdiet massa tincidunt nunc pulvinar. Et malesuada fames ac turpis.
        Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate sapien nec. Et tortor
        consequat id porta nibh venenatis cras.
      </p>

      <Footer />
    </div>
  );
}

export default Planner;

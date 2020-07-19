import React from "react";
//import "../css/giftlist.css";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import present from "../Giftlist/present.jpg";
import meal from "../Giftlist/meal.jpg";

const GiftList = () => {
  return (
    <div>
      <Header />
      <Nav />
      <img src={present} alt="wrapped present with pink bow" />
      <h2>Have everything you need? Why not ask for honeymoon experiences?</h2>
      <div className="giftlist-container">
        <article>
          <p>Meal for two</p>
          <img src={meal} alt="wine glasses and candles" width="25%" />
          <button className="cost">£50</button>
          <button className="add-btn">Add Gift</button>
        </article>
        <article>
          <p>Meal for two</p>
          <img src={meal} alt="wine glasses and candles" width="25%" />
          <button className="cost">£50</button>
          <button className="add-btn">Add Gift</button>
        </article>
        <article>
          <p>Meal for two</p>
          <img src={meal} alt="wine glasses and candles" width="25%" />
          <button className="cost">£50</button>
          <button className="add-btn">Add Gift</button>
        </article>
        <article>
          <p>Meal for two</p>
          <img src={meal} alt="wine glasses and candles" width="25%" />
          <button className="cost">£50</button>
          <button className="add-btn">Add Gift</button>
        </article>
        <article>
          <h3 className="gl-total">Total: £</h3>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default GiftList;

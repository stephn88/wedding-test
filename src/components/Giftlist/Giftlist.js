import React, { useState } from "react";
//import "./App.css";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
//import { MealForTwo } from "./Mealfortwo";
//import { Basket } from "./Basket";

function GiftList() {
  const [basket, setBasket] = useState([]);

  const [gift] = useState([
    {
      name: "Meal for two",
      price: "£40",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573053009372-3dd4c5b275b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Luggage",
      price: "£100",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "Wine tasting",
      price: "£60",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1585679455979-a0c2ded174b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Balloon Ride",
      price: "£40",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1586491157403-f3407cb8ff5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80",
    },
    {
      name: "Safari",
      price: "£40",
      id: 5,
      image:
        "https://images.unsplash.com/photo-1517339234442-5cfdc9a90a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Flights",
      price: "£400",
      id: 6,
      image:
        "https://images.unsplash.com/photo-1576335044483-99788804938e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Hotel",
      price: "£400",
      id: 7,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Massage",
      price: "£30",
      id: 8,
      image:
        "https://images.unsplash.com/flagged/photo-1560944527-a4a429848866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    },
  ]);

  const addToGiftList = (gift) => {
    setBasket([...basket, gift]);
  };

  return (
    <div>
      <Header />
      <Nav />
      <h2>Have everything you need? Why not ask for honeymoon experiences?</h2>
      <div>
        {gift.map((gift, id) => (
          <div className="gifts-container" key={id}>
            <h2>{gift.name}</h2>
            <h2>{gift.price}</h2>
            <img src={gift.image} alt={gift.name} />
            <button onClick={() => addToGiftList(gift)}>Add to Giftlist</button>
            <button>More info</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default GiftList;

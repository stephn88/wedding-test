import React from "react";
import Tasklist from "./Tasklist";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import steps from "../images/steps-veil.jpg";

function Planner() {
  const tasksForEighteen = [
    "Decide budget",
    "Pick venue",
    "Choose guests",
    "Pick ceremony type",
    "View and book venue",
    "Book registrar/celebrant",
    "Finalise guest list",
    "Buy wedding insurance",
    "Pick wedding party",
  ];
  const tasksForTwelve = [
    "Send out Save the Dates",
    "Book transport",
    "Book entertainment",
    "Hire caters",
    "Start dress shopping",
    "Start looking for bridesmaids dresses",
    "Book hair and make-up artist/s",
  ];
  const tasksForNine = [
    "Book a florist",
    "Choose your cake",
    "Order your dress (if you haven't already)",
    "Buy your bridal accessories",
    "Buy/make favours (if you want them)",
    "Give notice of marriage at local registrar",
  ];
  const tasksForSix = [
    "Start shopping for groomswear",
    "Buy bridesmaids dresses",
    "Book honeymoon and minimoon (if you're having one)",
    "Buy wedding rings",
    "Organise first night accommodation",
    "Discuss order of service with registrar/vicar",
    "Choose ceremony reading, songs or poems",
    "Start writing vows (if you're writing your own",
    "Set up gift list",
  ];

  const tasksForThree = [
    "Send invitations",
    "Alter dress and/or suit",
    "Have hair and makeup trial/s",
    "Enjoy your hen/stag do",
    "Break in shoes",
    "Write speeches",
    "Buy thank you presents",
    "Go menu tasting with caterers",
    "Make table plan",
    "Confirm guest numbers and dietary requirements",
  ];
  const tasksForOne = [
    "Have wedding rehearsal",
    "Confirm all bookings and vendors",
    "Finalise wedding day plan and DELEGATE",
    "Settle all final payments",
    "Collect hired items",
    "Pick up wedding day",
  ];

  return (
    <div>
      <Header />
      <Nav />
      <div className="planner-container">
        <h1 className="home-planner">Planner</h1>
        <img className="planner img" src={steps} alt="groom laughing" />
        <p className="pl-p-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
          platea dictumst vestibulum rhoncus est. Adipiscing enim eu turpis
          egestas. Faucibus ornare suspendisse sed nisi lacus sed viverra
          tellus. Urna nec tincidunt praesent semper feugiat nibh sed. Quis
          imperdiet massa tincidunt nunc. Lectus proin nibh nisl condimentum id
          venenatis. Imperdiet massa tincidunt nunc pulvinar. Et malesuada fames
          ac turpis. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
          Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
          nec. Et tortor consequat id porta nibh venenatis cras.
        </p>
        <div className="ind-tasks-container">
          <span>
            <h1>18 Months Out</h1>
            <Tasklist giventasks={tasksForEighteen} />
          </span>
          <span>
            <h1>12 Months Out</h1>
            <Tasklist giventasks={tasksForTwelve} />
          </span>
          <span>
            <h1>9 Months Out</h1>
            <Tasklist giventasks={tasksForNine} />
          </span>
          <span>
            <h1>6 Months Out</h1>
            <Tasklist giventasks={tasksForSix} />
          </span>
          <span>
            <h1>3 Months Out</h1>
            <Tasklist giventasks={tasksForThree} />
          </span>
          <span>
            <h1>1 Week Out</h1>
            <Tasklist giventasks={tasksForOne} />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Planner;

import React from "react";
import Tasklist from "./Tasklist";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./planner.css";
import kiss from "./couple-kiss.jpg";

function Planner() {
  //made individual arrays for the milestones
  const tasksForEighteen = [
    "Decide budget",
    "Pick venue",
    "Choose guests",
    "Pick ceremony type",
    "View & book venue",
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
    "Look for maids' dresses",
    "Book hair & make-up",
  ];
  const tasksForNine = [
    "Book a florist",
    "Choose your cake",
    "Order your dress",
    "Buy bridal accessories",
    "Buy/make favours",
    "Give notice of marriage",
  ];
  const tasksForSix = [
    "Look for groomswear",
    "Buy bridesmaids dresses",
    "Book honeymoon",
    "Buy wedding rings",
    "Organise wedding hotel",
    "Plan order of service",
    "Pick ceremony readings etc.",
    "Start writing vows",
    "Set up gift list",
  ];

  const tasksForThree = [
    "Send invitations",
    "Alter dress &/or suit",
    "Have hair & makeup trial/s",
    "Enjoy your hen/stag do",
    "Break in shoes",
    "Write speeches",
    "Buy thank you presents",
    "Go menu tasting",
    "Make table plan",
    "Confirm guest numbers",
    "Check guest allergies",
  ];
  const tasksForOne = [
    "Have wedding rehearsal",
    "Confirm all bookings",
    "Finalise wedding day plan",
    "Settle all final payments",
    "Collect hired items",
    "Pick up wedding dress",
  ];

  return (
    <div>
      <Header />
      <Nav />
      <div className="planner-container">
        <h1>Planner</h1>
        <img
          className="planner-img"
          src={kiss}
          alt="bride and groom kissing in orchard"
        />
        <p className="pl-p-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
          platea dictumst vestibulum rhoncus est. Adipiscing enim eu turpis
          egestas. Faucibus ornare suspendisse sed nisi lacus sed viverra
          tellus.
        </p>
        <div className="task-divs">
          <div className="task-div">
            {/*using divs to separate each list*/}
            <h1>18 Months Out</h1>
            <Tasklist
              tasksReference="EighteenMonths" //this is taken from the tasklist component to show how many tasks are left
              givenTasks={tasksForEighteen} //outputs tasklist for this milestone
            />
          </div>
          <div className="task-div">
            <h1>12 Months Out</h1>
            <Tasklist
              tasksReference="TwelveMonths"
              givenTasks={tasksForTwelve}
            />
          </div>
          <div className="task-div">
            <h1>9 Months Out</h1>
            <Tasklist tasksReference="NineMonths" givenTasks={tasksForNine} />
          </div>
          <div className="task-div">
            <h1>6 Months Out</h1>
            <Tasklist tasksReference="SixMonths" givenTasks={tasksForSix} />
          </div>
          <div className="task-div">
            <h1>3 Months Out</h1>
            <Tasklist tasksReference="ThreeMonths" givenTasks={tasksForThree} />
          </div>
          <div className="task-div">
            <h1>1 Week Out</h1>
            <Tasklist tasksReference="OneWeek" givenTasks={tasksForOne} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Planner;

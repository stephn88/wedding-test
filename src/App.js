import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Planner from "./Pages/Planner/Planner";
import Home from "./Pages/Homepage/Home";
import About from "./Pages/About/About";
import Relaxation from "./Pages/Relaxation/Relaxation";
import GiftList from "./Pages/Giftlist/Giftlist";
import Error from "./Pages/404/404Error";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/planner" exact component={Planner} />
          <Route path="/giftlist" exact component={GiftList} />
          <Route path="/relaxation" exact component={Relaxation} />
          <Route path="/about" exact component={About} />
          <Route path="*" exact component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

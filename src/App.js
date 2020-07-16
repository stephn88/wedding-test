import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import { Nav, Planner, Home, About, Relaxation } from "./components/*";
import Planner from "./components/Planner";
//import { Tasklist } from "./components/Tasklist";
import Home from "./components/Home";
import About from "./components/About";
import Relaxation from "./components/Relaxation";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/planner" exact component={Planner} />
          <Route path="/relaxation" exact component={Relaxation} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

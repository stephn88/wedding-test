import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Planner from "./components/Planner";
import { Tasklist } from "./components/Tasklist";
import Home from "./components/Home";
import About from "./components/About";
import Relaxation from "./components/Relaxation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasklist" exact component={Tasklist} />
          <Route path="/relaxation" exact component={Relaxation} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

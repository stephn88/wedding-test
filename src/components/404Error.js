import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Header from "./Header";
import Error from "../images/flower-error.png";
import Footer from "./Footer";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="error-container">
          <p>
            <Link to="/">Whoops! Return to the homepage</Link>
          </p>
          <img className="error" src={Error} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom"; //used so user can click link and be presented with the homepage
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error from "./flower-error.png";

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
          <img className="error" src={Error} alt="404 error" />
        </div>
        <Footer />
      </div>
    );
  }
}
export default ErrorPage;

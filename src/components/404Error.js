import React from "react";
import { Link } from "react-router-dom";
import Error from "../images/404-error.jpg";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Click here to return to the homepage</Link>
        </h1>
        <img className="error" src={Error} />
      </div>
    );
  }
}
export default ErrorPage;

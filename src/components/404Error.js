import React from "react";
import { Link } from "react-router-dom";
import Error from "../images/404-error.jpg";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <img src={Error} />
        <h1>
          <Link to="/">Go to Home</Link>
        </h1>
      </div>
    );
  }
}
export default ErrorPage;

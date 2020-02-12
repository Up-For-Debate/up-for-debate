import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <h4 className="header-home">Home</h4>
        </Link>
      </div>
      <div>
        <Link to="/quiz">
          <h4>Quiz</h4>
        </Link>
        <Link to="/explore">
          <h4>Explore</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;

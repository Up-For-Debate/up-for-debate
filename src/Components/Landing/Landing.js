import React from "react";
import "./Landing.scss";
import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";

const Landing = () => {
  return (
    <div className="landing-background">
      <Header />
      <h1 className="landing-header">Up For Debate</h1>
      <SearchInput />
    </div>
  );
};

export default Landing;

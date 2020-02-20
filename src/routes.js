import React from "react";
import { Switch, Route } from "react-router-dom";
// installed npm i react-router-dom //
import CountyMap from "./Components/CountyMap/CountyMap";
import Dashboard from "./Components/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import RegisterToVote from "./Components/RegisterToVote/RegisterToVote";

import Representatives from "./Components/Representative/Representatives";
import SearchInput from "./Components/SearchInput/SearchInput";
import QuizApp from "./Components/Quiz/QuizApp";
import Vote from "./Components/Vote/Vote";

// import StateMap from "./Components/Vote/Vote";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/countymap" component={CountyMap} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/explore" component={Explore} />
    <Route path="/header" component={Header} />
    <Route path="/registertovote" component={RegisterToVote} />
    <Route path="/representatives" component={Representatives} />
    <Route path="/searchinput" component={SearchInput} />
    <Route path="/quiz" component={QuizApp} />
    <Route path="/vote" component={Vote} />
  </Switch>
);

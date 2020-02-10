import React from "react";
import { Switch, Route } from "react-router-dom";
// installed npm i react-router-dom //
import CountyMap from "./src/Components/CountyMap/CountyMap";
import Dashboard from "./src/Components/Dashboard/Dashboard";
import Explore from "./src/Components/Explore/Explore";
import Header from "./src/Components/Header/Header";
import Landing from "./src/Components/Landing/Landing";
import RegisterToVote from "./src/Components/RegisterToVote";
import RepCard from "./src/Components/RepCard/RepCard";
import Representatives from "./src/Components/Representatives/Representatives";
import SearchInput from "./src/Components/StateMap/StateMap";
import StateMap from "./src/Components/Vote/Vote";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/repcard" component={RepCard} />
    <Route path="/statemap" component={StateMap} />
    <Route path="/countymap" component={CountyMap} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/explore" component={Explore} />
    <Route path="/header" component={Header} />
    <Route path="/registertovote" component={RegisterToVote} />
    <Route path="/representatives" component={Representatives} />
    <Route path="/searchinput" component={SearchInput} />
  </Switch>
);

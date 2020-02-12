import React from "react";
import routes from "./routes.js";
import Header from './Components/Header/Header'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>);
}

export default App;

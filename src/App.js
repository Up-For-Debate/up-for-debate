import React from "react";
import routes from "./routes.js";
import Header from "./Components/Header/Header";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvide } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#62727B"
      },
      secondary: {
        main: "#BC051B"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import routes from "./routes.js";
import Header from "./Components/Header/Header";
import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

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
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header id="header" />
        {routes}
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;

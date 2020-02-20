import App from "../../src/App";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

it("renders the map", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
  expect(container).not.toBe(null);
});

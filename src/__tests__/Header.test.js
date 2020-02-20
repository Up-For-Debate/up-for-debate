import Header from "../components/Header/Header";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

it("renders the header", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </HashRouter>
  );
  expect(container).not.toBe(null);
});

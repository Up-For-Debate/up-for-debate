import RegisterToVote from "../components/RegisterToVote/RegisterToVote";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

it("renders the map", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <RegisterToVote />
      </Provider>
    </HashRouter>
  );
  expect(container).not.toBe(null);
});

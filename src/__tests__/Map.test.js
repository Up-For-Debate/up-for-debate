import Map from "../components/Explore/Map.js";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import states from "../assets/states.json";

it("renders the map", () => {
  const { container } = render(
    <Provider store={store}>
      <Map states={states} />
    </Provider>
  );
  expect(container).not.toBe(null);
});

import React from "react";
import CountyMap from "../Components/CountyMap/CountyMap";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";

it("renders the map", () => {
  const { container } = render(
    <Provider store={store}>
      <CountyMap />
    </Provider>
  );
  // console.log(container)
  expect(container).not.toBe(null);
});

it('renders no text', () => {
  const {container}= render(
    <Provider store={store}>
      <CountyMap/>
    </Provider>
  )
  expect(container.textContent).toContain('')
})

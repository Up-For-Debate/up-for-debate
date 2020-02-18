import React from "react";
import Explore from "../Components/Explore/Explore";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";

it('renders the Explore component', () => {
  const {container} = render (
    <Provider store={store}>
      <Explore/>
    </Provider>
  )
  expect(container).not.toBe(null)
})

it('renders the word "Explore"', () => {
  const {container}= render(
    <Provider store={store}>
      <Explore/>
    </Provider>
  )
  expect(container.textContent).toContain('Explore')
})
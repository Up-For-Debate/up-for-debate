import WhereToVotePopup from "../components/Vote/WhereToVotePopup";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

it("renders the Popup", () => {
	const { container } = render(
		<Provider store={store}>
			<HashRouter>
				<WhereToVotePopup />
			</HashRouter>
		</Provider>
	);
	expect(container).not.toBe(null);
});

it('renders the word "State"', () => {
	const { container } = render(
		<Provider store={store}>
			<HashRouter>
				<WhereToVotePopup />
			</HashRouter>
		</Provider>
	);
	expect(container.textContent).toContain("State");
});

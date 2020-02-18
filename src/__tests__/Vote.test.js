import Vote from "../components/Vote/Vote";
import React from "react";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

it("renders the Vote", () => {
	const { container } = render(
		<Provider store={store}>
			<HashRouter>
				<Vote />
			</HashRouter>
		</Provider>
	);
	expect(container).not.toBe(null);
});
it("Vote renders the word Looking", () => {
	const { container } = render(
		<Provider store={store}>
			<HashRouter>
				<Vote />
			</HashRouter>
		</Provider>
	);
	expect(container.textContent).toContain("");
});

it("Vote renders the GoogleMaps Component", () => {
	const { container } = render(
		<Provider store={store}>
			<HashRouter>
				<Vote />
			</HashRouter>
		</Provider>
	);
	expect(container).not.toContain(
		`<div><div><div style="height: 100vh; display: flex; justify-content: center; align-items: center;"><div aria-busy="true" class=""><div aria-label="audio-loading" class="container" role="presentation"><div class="react-spinner-loader-swing"><div class="react-spinner-loader-swing-l" /><div /><div /><div /><div /><div /><div class="react-spinner-loader-swing-r" /></div><div class="react-spinner-loader-shadow"><div class="react-spinner-loader-shadow-l" /><div /><div /><div /><div /><div /><div class="react-spinner-loader-shadow-r" /></div></div></div></div></div></div>`
	);
});

const initialState = {
	streetAddress: "",
	zipcode: "",
	city: "",
	usState: ""
};

const GET_CITYSTATE = "GET_CITYSTATE";
const SET_STREET_ADDRESS_ZIPCODE = "SET_STREET_ADDRESS_ZIPCODE";

export const setStreetAddressZipcode = (streetAddress, zipcode) => {
	return {
		type: SET_STREET_ADDRESS_ZIPCODE,
		payload: { streetAddress, zipcode }
	};
};

export const getCityState = (city, usState) => {
	return {
		type: GET_CITYSTATE,
		payload: { city, usState }
	};
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_STREET_ADDRESS_ZIPCODE:
			return {
				...state,
				streetAddress: payload.streetAddress,
				zipcode: payload.zipcode
			};
		case GET_CITYSTATE:
			return { ...state, city: payload.city, usState: payload.usState };
		default:
			return state;
	}
}

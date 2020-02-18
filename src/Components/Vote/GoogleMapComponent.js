import React from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	OverlayView
} from "@react-google-maps/api";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;

const mapContainerStyle = {
	height: "400px",
	width: "800px"
};

const center = {
	lat: 33.772,
	lng: -117.214
};

const GoogleMapComponent = props => {
	console.log(props.pollingLocation);
	return (
		<LoadScript id="script-loader" googleMapsApiKey={REACT_APP_GOOGLE_MAPS_KEY}>
			<GoogleMap
				id="example-map"
				mapContainerStyle={mapContainerStyle}
				zoom={12}
				center={{ lat: props.lat, lng: props.lng }}
			>
				<Marker
					position={{ lat: props.lat, lng: props.lng }}
					clickable={true}
					animation="bounce"
				/>
				<OverlayView
					position={{ lat: props.lat + 0.035, lng: props.lng - 0.06 }}
					mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
				>
					<div
						style={{
							background: `white`,
							border: `1px solid #ccc`,
							padding: 15
						}}
					>
						<h2>{props.pollingLocation.locationName}</h2>
						<h2>{props.formatedLocation}</h2>
						<a
							target="_blank"
							rel="noopener"
							href={`https://www.google.com/maps/search/${props.formatedLocation}/@${props.lat}${props.lng}`}
						>
							Get Directions!
						</a>
					</div>
				</OverlayView>
			</GoogleMap>
		</LoadScript>
	);
};

export default GoogleMapComponent;

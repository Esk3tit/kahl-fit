import React from "react";
import LocationPin from "./LocationPin";
// @ts-ignore
import GoogleMapReact from "google-map-react";
import "../style/Map.css";

const location = {
    address: "1067 NW Corporate Dr, Troutdale, OR 97060",
    lat: 45.54742926251395,
    lng: -122.40485593604289,
};

export default function Map(props: any) {
    return (
        <div className="map">
            <h2 className="map-h2">O'Malley's Gym</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyC_3z7_JEki8l6ARI7fPZy7aCnAWW-Rxis",
                    }}
                    defaultCenter={props.location}
                    defaultZoom={props.zoomLevel}
                >
                    <LocationPin
                        lat={props.location.lat}
                        lng={props.location.lng}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

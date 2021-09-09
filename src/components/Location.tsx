import React from "react";
// import GoogleMapReact from "google-map-react";
import "../style/Location.css";
import Map from "./Map";

// const GoogleMapReact = require("google-map-react");

const location = {
    address: "1067 NW Corporate Dr, Troutdale, OR 97060",
    lat: 45.54742926251395,
    lng: -122.40485593604289,
};


function Location() {
    return (
        <div className="location-div">
            <h1 className="location-header">Location of Services</h1>
            <p className="location-addy">
                O’Malley’s Gym, 1067 NW Corporate Dr <br />
                Troutdale, OR 97060
            </p>
            <Map location={location} zoomLevel={17} />
        </div>
    );
}

export default Location;

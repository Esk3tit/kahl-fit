import React from "react";
// import GoogleMapReact from "google-map-react";
import "../style/Location.css";

const GoogleMapReact = require("google-map-react");
const center = {
    lat: 39,
    lng: 30
};
const zoom = 11;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Location() {
    return (
        <div className="location">
            <h1 className="location-header">Location of Services</h1>
            <p>
                O’Malley’s Gym, 1067 NW Corporate Dr <br />
                Troutdale, OR 97060
            </p>
            
            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: YOUR KEY HERE }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div> */}
        </div>
    );
}

export default Location;

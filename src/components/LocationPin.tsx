import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../style/Map.css";

export default function LocationPin(props:any) {
    return (
        <div className="pin">
            <FaMapMarkerAlt />
            <p className="pin-text">1067 NW Corporate Dr, Troutdale, OR 97060</p>
        </div>
    );
}

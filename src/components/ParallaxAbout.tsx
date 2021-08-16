import React from "react";
import "../style/ParallaxAbout.css";
const Rellax = require("rellax");
let rellax = new Rellax(".rellax");


// replaced later with pictures of eddie
export default function ParallaxAbout() {
    return (
        <div className="content-about">
            <div className="one ">
                <img
                    src="https://i2.wp.com/www.pednet.org/wp-content/uploads/Gray-Box-2.jpg"
                    className="gray-box rellax"
                    data-rellax-speed="2"
                />
            </div>
            <div className="two">
                <img
                    src="https://i2.wp.com/www.pednet.org/wp-content/uploads/Gray-Box-2.jpg"
                    className="gray-box rellax"
                />
            </div>

            <div className="three">
                <img
                    src="https://i2.wp.com/www.pednet.org/wp-content/uploads/Gray-Box-2.jpg"
                    className="gray-box rellax"
                    data-rellax-speed="-3"
                />
            </div>
        </div>
    );
}

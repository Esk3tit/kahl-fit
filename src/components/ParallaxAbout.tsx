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
                    src="https://cdn.discordapp.com/attachments/808530804702707803/876924343521796147/unknown.png"
                    className="gray-box rellax"
                    data-rellax-speed="4"
                />
            </div>
            <div className="two">
                <img
                    src="https://cdn.discordapp.com/attachments/808530804702707803/876924706203246612/unknown.png"
                    className="gray-box rellax"
                />
            </div>

            <div className="three">
                <img
                    src="https://cdn.discordapp.com/attachments/808530804702707803/876925060575801344/unknown.png"
                    className="gray-box rellax"
                    data-rellax-speed="-4"
                />
            </div>
        </div>
    );
}

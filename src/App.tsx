import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Policies from "./components/Policies";
import Location from "./components/Location";
import Services from "./components/Services";
import Footer from "./components/Footer";
import NavbarHeader from "./components/Navbar";
import { Container, Navbar, Nav } from "react-bootstrap";
import ParallaxAbout from "./components/ParallaxAbout";
import PersonalTraining from "./components/PersonalTraining";
import Appointment from "./components/Appointment";

function App() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <NavbarHeader />

            <div className="content">
                {/* static -> parallax -> static ... */}
                <div id="Home">
                    <ParallaxAbout />
                </div>

                <div id="About">
                    <About />
                </div>

                {/* <div
                    className="parallax parallax-one"
                    style={{
                        transform: `translateY(-${offset * 0.5}px)`,
                    }}
                >
                    <img
                        src="https://cdn.discordapp.com/attachments/808530804702707803/874127360738349096/IMG_6983.jpeg"
                        width="300"
                    />
                </div> */}

                <div id="Policies">
                    <Policies />
                </div>

                {/* <div
                    className="parallax parallax-two"
                    style={{
                        transform: `translateY(-${offset * 0.5}px)`,
                    }}
                >
                    <img
                        src="https://cdn.discordapp.com/attachments/808530804702707803/874127363116511293/image_72192707.JPG"
                        width="650"
                    />
                </div> */}

                <div id="Personal-Training">
                    <PersonalTraining />
                </div>

                <div id="Services">
                    <Services />
                </div>

                {/* <div
                    className="parallax parallax-three"
                    style={{
                        transform: `translateY(-${offset * 0.5}px)`,
                    }}
                >
                    <img
                        src="https://cdn.discordapp.com/attachments/808530804702707803/874127364718743582/IMG_5507.jpeg"
                        width="650"
                    />
                </div> */}

                <div id="Location">
                    <Location />
                </div>

                <div>
                    <Appointment />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;

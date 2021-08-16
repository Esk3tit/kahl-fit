import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Policies from "./components/Policies";
import Services from "./components/Services";
import Location from "./components/Location";
import Footer from "./components/Footer";
import NavbarHeader from "./components/Navbar";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
    return (
        <div>
            <div>
                <NavbarHeader />
            </div>

            <div className="content">
                <div id="About">
                    <About />
                </div>

                <div id="Policies">
                    <Policies />
                </div>

                <div id="Services">
                    <Services />
                </div>

                <div id="Location">
                    <Location />
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

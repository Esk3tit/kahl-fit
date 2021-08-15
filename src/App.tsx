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
            {/* <NavbarHeader /> */}

            <Navbar bg="light" variant="light" sticky="top" className="navbar">
                <Container>
                    <Navbar.Brand href="#home"> Kahl Fit </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Policies">Policies</Nav.Link>
                        <Nav.Link href="#Services">Services</Nav.Link>
                        <Nav.Link href="#Location">Location</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

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

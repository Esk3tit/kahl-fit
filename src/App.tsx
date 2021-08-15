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
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"> Picture Here </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Policies">Policies</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Location">Location</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <About />
            <Policies />
            <Services />
            <Location />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

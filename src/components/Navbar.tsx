import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../style/Navbar.css";

const NavbarHeader = () => {
    return (
        // <div>
        //     <Container>
        //         <Navbar.Brand href="#" >
        //             Kahl Fit
        //         </Navbar.Brand>
        //         <Nav >
        //             <Nav.Link href="#">Home</Nav.Link>
        //             <Nav.Link href="#About">About</Nav.Link>
        //             <Nav.Link href="#Policies">Policies</Nav.Link>
        //             <Nav.Link href="#Services">Services</Nav.Link>
        //             <Nav.Link href="#Location">Location</Nav.Link>
        //         </Nav>
        //     </Container>
        // </div>
        <Navbar bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#">Kahl Fit</Navbar.Brand>
            </Container>

            <Container>
                <Nav>
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Policies">Policies</Nav.Link>
                    <Nav.Link href="#Personal-Training">Personal Training</Nav.Link>
                    <Nav.Link href="#Services">Services</Nav.Link>
                    <Nav.Link href="#Location">Location</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarHeader;

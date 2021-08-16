import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import '../style/Navbar.css';

const NavbarHeader = () => {
    return (
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
    )
}

export default NavbarHeader;
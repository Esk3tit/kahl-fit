import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import '../style/Navbar.css';

const NavbarHeader = () => {
    return (
        <div>
            <Navbar bg="light" variant="light"  >
                <Container>
                    <Navbar.Brand href="#home"> Picture Here </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/Home"> 
                        Home 
                        </Nav.Link>
                        <Nav.Link href="/About"> 
                        About 
                        </Nav.Link>
                        <Nav.Link href="/Policies"> 
                        Policies 
                        </Nav.Link>
                        <Nav.Link href="/Services"> 
                        Services 
                        </Nav.Link>
                        <Nav.Link href="/Location"> 
                        Location 
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHeader;
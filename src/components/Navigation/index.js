import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from 'IMAGES/next-logo-40.png';
import './Navigation.scss';

function Navigation() {
    return (
        <Navbar bg="primary" variant="light" className="header">
            <Navbar.Brand href="/"><img src={ logo } alt="Logo" /></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;

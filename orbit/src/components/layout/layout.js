import React from 'react'

import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './layout.scss'

const layout = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">E-Faktury</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Paragony</Nav.Link>
                    <Nav.Link href="#">Faktury</Nav.Link>
                    <Nav.Link href="#">Faktury zaliczkowe</Nav.Link>
                    <Nav.Link href="#">Dokumenty</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default layout
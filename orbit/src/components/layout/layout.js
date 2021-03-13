import React from 'react'
import { Link, Route } from "wouter";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Receipt from './receipt/receipt'
import Invoice from './invoice/invoice'
import Prepayment from './prepayment/prepayment'
import Issued from './issued/issued'

import './layout.scss'

const layout = () =>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Link href="/"><Navbar.Brand href="#home">E-Faktury</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/paragony"><Nav.Link>Paragony</Nav.Link></Link>
                        <Link href="/faktury"><Nav.Link>Faktury</Nav.Link></Link>
                        <Link href="/faktury_zaliczkowe"><Nav.Link>Faktury Zaliczkowe</Nav.Link></Link>
                        <Link href="/dokumenty"><Nav.Link>Dokumenty</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/paragony">
                <Receipt/>
            </Route>
            <Route path="/faktury">
                <Invoice/>
            </Route>
            <Route path="/faktury_zaliczkowe">
                <Prepayment/>
            </Route>
            <Route path="/dokumenty">
                <Issued/>
            </Route>
        </>

    )
}

export default layout
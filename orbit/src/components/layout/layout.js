import React, { Component } from 'react'
import { Link, Route } from "wouter";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Receipt from './receipt/receipt'
import Invoice from './invoice/invoice'
import Prepayment from './prepayment/prepayment'
import Issued from './issued/issued'

import './layout.scss'

class Layout extends Component {

    state={
        invoice:{
            number: 'qwerty123456',
            issueDate: '13.03.2021',
            saleDate: '10.03.2021',
            type: 'Osoba prywatna',
            origin: 'Francja',
            NIP: '111111111',
            name:'Fundacja marzenia',
            address:'Długa',
            zipCode:'30-231',
            city:'Kraków',
            country:'Polska',
            email:'fundacjamarzenia@gmail.com',
            transaction:'Krajowa',
            paymentMethod:'Przelew',
            paymentStatus:'Opłacone',
            dueDate:'20.03.2021',
            currency:'Polski złoty',
            account:'mbank',
            accountNumber:'1111 2222 3333 4444 5555',
            product:'Książki edykacyjne',
            PKWiU:'12345.55.44',
            quantity:'100',
            unit:'szt.',
            unitNetPrice:'100',
            VATRate:'5',
            VatExemption:'nie',
            GTU:'0',
            VAT:'5',
            grossValue:'105',
            productAmount:'1',
        },
        invoices:{

        }
    }

    inputChangeHandler(event, type){

        const updatedInvoice = {
            ...this.state.invoice
        }
        updatedInvoice[type] = event.target.value
        this.setState({invoice: updatedInvoice})

        console.log(this.state.invoice)
    }

    sendInvoiceHandler = () => {
        const updatedInvoice = {
            ...this.state.invoice
        }
        this.setState({invoices:updatedInvoice})
        console.log(this.state.invoices)
    }

    render(){
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
                    <Invoice
                        inputChange={this.inputChangeHandler.bind(this)}
                        sendInvoice={this.sendInvoiceHandler}
                    />
                </Route>
                <Route path="/faktury_zaliczkowe">
                    <Prepayment/>
                </Route>
                <Route path="/dokumenty">
                    <Issued
                        invoices={this.state.invoices}
                    />
                </Route>
            </>

        )
    }

}

export default Layout
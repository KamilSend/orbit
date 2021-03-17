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
            // items: [{product:'Książki edukacyjne',
            //     PKWiU:'12345.55.44',
            //     quantity:'100',
            //     unit:'szt.',
            //     unitNetPrice:'100',
            //     VATRate:'5',
            //     VatExemption:'nie',
            //     GTU:'0',
            //     VAT:'5',
            //     grossValue:'105',}],
            items: [],
            productAmount:'0',
        },
        item: {product:'jajko',
            PKWiU:'222',
            quantity:'1500100900',
            unit:'szt.',
            unitNetPrice:'1',
            VATRate:'1',
            VatExemption:'tak',
            GTU:'0',
            VAT:'0',
            grossValue:'1'},
        invoices:[{number: 'qwerty123456',
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
            items: [{product:'',
                PKWiU:'',
                quantity:'',
                unit:'',
                unitNetPrice:'',
                VATRate:'',
                VatExemption:'',
                GTU:'',
                VAT:'',
                grossValue:'',}],
            productAmount:'1',}]
    }

    inputChangeHandler(event, type, itemsType){

        const updatedInvoice = {
            ...this.state.invoice
        }

        const updatedItem = {
            ...this.state.item
        }

        if (type === 'items'){
            updatedItem[itemsType] = event.target.value
        }
        else{
            updatedInvoice[type] = event.target.value
        }

        this.setState({invoice: updatedInvoice})
        this.setState({item: updatedItem})

        console.log(this.state.item)
    }

    addItemHandler = () => {

        const updatedInvoice = {
            ...this.state.invoice
        }

        updatedInvoice.items.push(this.state.item)
        this.setState({invoice: updatedInvoice})
        console.log(this.state.invoice)
    }

    sendInvoiceHandler = () => {
        const updatedInvoice = {
            ...this.state.invoice
        }
        this.setState({invoices:[updatedInvoice]})
        console.log(this.state.invoices[0].items[0])
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
                        addItem={this.addItemHandler}
                        items={this.state.invoice.items}
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
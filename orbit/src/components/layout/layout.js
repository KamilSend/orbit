import React, { Component } from 'react'
import { Link, Route } from "wouter";
import { Navbar, Nav } from 'react-bootstrap';

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
            saleDate: '',
            place:'',
            type: '',
            origin: '',
            NIP: '',
            name:'',
            address:'',
            zipCode:'',
            city:'',
            country:'',
            email:'',
            transaction:'',
            paymentMethod:'',
            paymentStatus:'',
            dueDate:'',
            currency:'',
            account:'',
            accountNumber:'',
            items: [],
            productAmount:'0',
        },
        item: {product:'',
            PKWiU:'',
            quantity:'',
            unit:'',
            unitNetPrice:'',
            VATRate:'',
            VatExemption:'',
            GTU:'0',
            VAT:'0',
            grossValue:'0'},
        invoices:[]
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
            this.setState({item: updatedItem})
        }
        else{
            updatedInvoice[type] = event.target.value
        }

        this.setState({invoice: updatedInvoice})
    }

    addItemHandler = () => {

        const updatedInvoice = JSON.parse(JSON.stringify(this.state.invoice))

        const updatedItem = {...this.state.item}

        updatedInvoice.items.push(updatedItem)
        this.setState({invoice: updatedInvoice})
        this.setState({item:{product:'',
            PKWiU:'',
            quantity:'',
            unit:'',
            unitNetPrice:'',
            VATRate:'',
            VatExemption:'',
            GTU:'0',
            VAT:'0',
            grossValue:'0'}})
    }

    sendInvoiceHandler = () => {
        const updatedInvoice = {...this.state.invoice}

        const updatedInvoices = [...this.state.invoices]

        updatedInvoices.push(updatedInvoice)

        // console.log(updatedInvoice)
        // console.log(updatedInvoices)

        this.setState({invoices:updatedInvoices})
        this.setState({invoice:{
                number: 'qwerty123456',
                issueDate: '13.03.2021',
                saleDate: '',
                place:'',
                type: '',
                origin: '',
                NIP: '',
                name:'',
                address:'',
                zipCode:'',
                city:'',
                country:'',
                email:'',
                transaction:'',
                paymentMethod:'',
                paymentStatus:'',
                dueDate:'',
                currency:'',
                account:'',
                accountNumber:'',
                items: [],
                productAmount:'0',
            }})
        // console.log(this.state.invoices)
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
                        invoice={this.state.invoice}
                        items={this.state.invoice.items}
                        item={this.state.item}
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
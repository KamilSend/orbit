import React, { Component } from 'react'
import { Link, Route } from "wouter";
import {Navbar, Nav, Button} from 'react-bootstrap';
import { signout } from '../../helpers/auth'

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
        invoices:[],
        receipts:[],
        prepayments:[],
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
                updatedItem.VAT = updatedItem.VATRate*updatedItem.quantity*updatedItem.unitNetPrice*0.01
                if(updatedItem.VatExemption!=='') updatedItem.VAT=0
                updatedItem.grossValue = updatedItem.VAT+updatedItem.unitNetPrice*updatedItem.quantity
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

    sendInvoiceHandler(type){
        const updatedInvoice = {...this.state.invoice}

        switch(type){
            case 'invoice':{
                const updatedInvoices = [...this.state.invoices]
                updatedInvoices.push(updatedInvoice)
                this.setState({invoices:updatedInvoices})
                break;
            }
            case 'receipt':{
                const updatedReceipts = [...this.state.receipts]
                updatedReceipts.push(updatedInvoice)
                this.setState({receipts:updatedReceipts})
                break;
            }
            case 'prepayment':{
                const updatedPrepayments = [...this.state.prepayments]
                updatedPrepayments.push(updatedInvoice)
                this.setState({prepayments:updatedPrepayments})
                break;
            }

            default: break;
        }


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
                            <Button onClick={signout}>Wyloguj</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/paragony">
                    <Receipt
                        inputChange={this.inputChangeHandler.bind(this)}
                        sendInvoice={this.sendInvoiceHandler.bind(this)}
                        addItem={this.addItemHandler}
                        invoice={this.state.invoice}
                        items={this.state.invoice.items}
                        item={this.state.item}
                    />
                </Route>
                <Route path="/faktury">
                    <Invoice
                        inputChange={this.inputChangeHandler.bind(this)}
                        sendInvoice={this.sendInvoiceHandler.bind(this)}
                        addItem={this.addItemHandler}
                        invoice={this.state.invoice}
                        items={this.state.invoice.items}
                        item={this.state.item}
                    />
                </Route>
                <Route path="/faktury_zaliczkowe">
                    <Prepayment
                        inputChange={this.inputChangeHandler.bind(this)}
                        sendInvoice={this.sendInvoiceHandler.bind(this)}
                        addItem={this.addItemHandler}
                        invoice={this.state.invoice}
                        items={this.state.invoice.items}
                        item={this.state.item}
                    />
                </Route>
                <Route path="/dokumenty">
                    <Issued
                        invoices={this.state.invoices}
                        receipts={this.state.receipts}
                        prepayments={this.state.prepayments}
                    />
                </Route>
            </>

        )
    }

}

export default Layout
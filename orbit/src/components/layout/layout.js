import React, { Component } from 'react'
import axios from "axios";
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
            paid:'',
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
        summaries:{
            invoice:{
                netValue:'',
                VATValue:'',
                grossValue:'',
            },
            receipt:{
                netValue:'',
                VATValue:'',
                grossValue:'',
            },
            prepayment:{
                netValue:'',
                VATValue:'',
                grossValue:'',
            },
        },
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

    summaryCounter(type){
        const updatedInvoice = JSON.parse(JSON.stringify(this.state.invoice))
        const updatedSummaries = {...this.state.summaries}
        let VAT = 0;
        let netValue = 0;
        let grossValue = 0;
        for (let i = 0; i < updatedInvoice.items.length; ++i) {
            VAT += updatedInvoice.items[i].VAT;
            netValue +=updatedInvoice.items[i].quantity*updatedInvoice.items[i].unitNetPrice
            grossValue =+ VAT + netValue
        }
        updatedSummaries[type].VATValue = VAT
        updatedSummaries[type].netValue = netValue
        updatedSummaries[type].grossValue = grossValue
        console.log(VAT)
        console.log(netValue)
        console.log(grossValue)
        this.setState({summaries:updatedSummaries})
        console.log(this.state.summaries)
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
        const updatedSummaries = {...this.state.summaries}
        updatedInvoice.summary = updatedSummaries[type]

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
                paid:'',
            }})
        this.setState({summaries:{invoice:{
                    netValue:'',
                    VATValue:'',
                    grossValue:'',
                },
                receipt:{
                    netValue:'',
                    VATValue:'',
                    grossValue:'',
                },
                prepayment:{
                    netValue:'',
                    VATValue:'',
                    grossValue:'',
                },}})
    }

    componentDidMount() {

        axios.get('https://efaktury-d30eb-default-rtdb.firebaseio.com/invoices.json')
            .then(response => {
                // console.log(JSON. parse(response.data));
                console.log(response);
                const invoices = [{number: response.data.number,
                    issueDate: response.data.issueDate,
                    saleDate: response.data.saleDate,
                    place:response.data.place,
                    type: response.data.type,
                    origin: response.data.origin,
                    NIP: response.data.NIP,
                    name:response.data.name,
                    address:response.data.address,
                    zipCode:response.data.zipCode,
                    city:response.data.city,
                    country:response.data.country,
                    email:response.data.email,
                    transaction:'',
                    paymentMethod:response.data.paymentMethod,
                    paymentStatus:response.data.paymentStatus,
                    dueDate:response.data.dueDate,
                    currency:response.data.currency,
                    account:response.data.account,
                    accountNumber:response.data.accountNumber,
                    items: [
                        {product:response.data.items.product,
                            PKWiU:response.data.items.PKWiU,
                            quantity:response.data.items.quantity,
                            unit:response.data.items.unit,
                            unitNetPrice:response.data.items.unitNetPrice,
                            VATRate:response.data.items.VATRate,
                            VatExemption:'',
                            GTU:response.data.items.GTU,
                            VAT:response.data.items.VAT,
                            grossValue:response.data.items.grossValue},
                    ],
                    productAmount:'0',
                    paid:'',
                    summary:{
                        netValue:response.data.summary.netValue,
                        VATValue:response.data.summary.VATValue,
                        grossValue:response.data.summary.grossValue,
                    }}]

                console.log(invoices)

                this.setState({invoices:invoices})
                }
            ).catch(function (error) {
                    console.log(error);
                })
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
                        invoiceSummary={this.state.summaries.receipt}
                        summaryCounter={this.summaryCounter.bind(this)}
                    />
                </Route>
                <Route path="/faktury">
                    <Invoice
                        inputChange={this.inputChangeHandler.bind(this)}
                        sendInvoice={this.sendInvoiceHandler.bind(this)}
                        addItem={this.addItemHandler}
                        invoice={this.state.invoice}
                        invoices={this.state.invoices}
                        items={this.state.invoice.items}
                        item={this.state.item}
                        invoiceSummary={this.state.summaries.invoice}
                        summaryCounter={this.summaryCounter.bind(this)}
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
                        invoiceSummary={this.state.summaries.prepayment}
                        summaryCounter={this.summaryCounter.bind(this)}
                    />
                </Route>
                <Route path="/dokumenty">
                    <Issued
                        invoices={this.state.invoices}
                        receipts={this.state.receipts}
                        prepayments={this.state.prepayments}
                        summaries={this.state.summaries}
                    />
                </Route>
            </>

        )
    }

}

export default Layout
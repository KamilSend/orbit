import React from 'react'

import { Container } from 'react-bootstrap';

import BasicData from '../partials/basicData/basicData'
import Salesman from '../partials/salesman/salesman'
import Buyer from '../partials/buyer/buyer'
import Payment from '../partials/payment/payment'
import ProductList from '../partials/productList/productList'
import Summary from '../partials/summary/summary'

import './invoice.scss'

const invoice = (props) =>{

    return(
        <>
            <Container>
                <h1>Wystaw nową fakturę</h1>
            </Container>
            <Container>
                <BasicData
                    invoice={props.invoice}
                    inputChange={props.inputChange}
                />
                <Salesman/>
                <Buyer
                    invoice={props.invoice}
                    inputChange={props.inputChange}
                />
                <Payment
                    invoice={props.invoice}
                    inputChange={props.inputChange}
                />
                <ProductList
                    inputChange={props.inputChange}
                    item={props.item}
                    items={props.items}
                    addItem={props.addItem}
                    summaryCounter={props.summaryCounter}
                    type="invoice"
                />
                <Summary
                    sendInvoice={() => props.sendInvoice('invoice')}
                    invoice={props.invoice}
                    invoiceSummary={props.invoiceSummary}
                />
            </Container>
        </>

    )
}

export default invoice
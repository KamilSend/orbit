import React from 'react'

import { Container } from 'react-bootstrap';

import BasicData from '../partials/basicData/basicData'
import Salesman from '../partials/salesman/salesman'
import Buyer from '../partials/buyer/buyer'
import Payment from '../partials/payment/payment'
import ProductList from '../partials/productList/productList'
import Summary from '../partials/summary/summary'

import './receipt.scss'

const receipt = (props) =>{

    return(
        <>
            <Container>
                <h1>Wystaw nowy paragon</h1>
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
                />
                <Summary
                    sendInvoice={() => props.sendInvoice('receipt')}
                />
            </Container>
        </>

    )
}

export default receipt
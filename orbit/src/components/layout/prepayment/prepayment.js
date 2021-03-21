import React from 'react'

import {Col, Container, Jumbotron, Row, Table} from 'react-bootstrap';

import BasicData from '../partials/basicData/basicData'
import Salesman from '../partials/salesman/salesman'
import Buyer from '../partials/buyer/buyer'
import Payment from '../partials/payment/payment'
import ProductList from '../partials/productList/productList'
import Summary from '../partials/summary/summary'

import './prepayment.scss'

const prepayment = (props) =>{

    return(
        <>
            <Container>
                <h1>Wystaw nową fakturę zaliczkową</h1>
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
                    type="prepayment"
                />
                <Jumbotron>
                    <Table>
                        <tbody>
                        <tr>
                            <th>Opłacono</th>
                            <th>Pozostało do zapłaty</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    onChange={(event) => props.inputChange(event, 'paid')}
                                    value={props.invoice.paid}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={props.invoiceSummary.grossValue-props.invoice.paid}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
                <Summary
                    sendInvoice={() => props.sendInvoice('prepayment')}
                    invoice={props.invoice}
                    invoiceSummary={props.invoiceSummary}
                />
            </Container>
        </>

    )
}

export default prepayment
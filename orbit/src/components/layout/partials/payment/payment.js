import React from 'react'
import {Col, Jumbotron, Row} from "react-bootstrap";

const payment = (props) =>{
    return(
        <Jumbotron id="payment">
            <Row>
                <Col><h2>Płatności</h2></Col>
            </Row>
            <Row>
                <Col>Sposób płatności</Col>
                <Col>
                    <select
                        name="paymentMethod"
                        id="payment"
                        onChange={(event) => props.inputChange(event, 'paymentMethod')}
                        value={props.invoice.paymentMethod}
                    >
                        <option value="Przelew">Przelew</option>
                        <option value="Gotówka">Gotówka</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>Status płatności</Col>
                <Col>
                    <select
                        name="paymentStatus"
                        id="paymentStat"
                        onChange={(event) => props.inputChange(event, 'paymentStatus')}
                        value={props.invoice.paymentStatus}
                    >
                        <option value="Nieopłacone">Nieopłacone</option>
                        <option value="Opłacone">Opłacone</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>Płatność do</Col>
                <Col><input
                    type="date"
                    onChange={(event) => props.inputChange(event, 'dueDate')}
                    value={props.invoice.dueDate}
                /></Col>
            </Row>
            <Row>
                <Col>Waluta</Col>
                <Col>
                    <select
                        name="currencyType"
                        id="currency"
                        onChange={(event) => props.inputChange(event, 'currency')}
                        value={props.invoice.currency}
                    >
                        <option value="Polski złoty">Polski złoty</option>
                        <option value="Dolar amerykański">Dolar amerykański</option>
                        <option value="Euro">Euro</option>
                        <option value="Funt brytyjski">Funt brytyjski</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>Nazwa banku</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'account')}
                    value={props.invoice.account}
                /></Col>
            </Row>
            <Row>
                <Col>Numer konta</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'accountNumber')}
                    value={props.invoice.accountNumber}
                /></Col>
            </Row>
        </Jumbotron>
    )
}

export default payment
import React from 'react'
import {Button, Col, Jumbotron, Row} from "react-bootstrap";

const summary = (props) =>{
    return(
        <Jumbotron id="summary">
            <Row>
                <Col><h2>Podsumowanie</h2></Col>
            </Row>
            <Row>
                <Col>Wartość netto</Col>
                <Col><input type="text"/></Col>
            </Row>
            <Row>
                <Col>Wartość VAT</Col>
                <Col><input type="text"/></Col>
            </Row>
            <Row>
                <Col>Wartość brutto</Col>
                <Col><input type="text"/></Col>
            </Row>
            <Button
                onClick={props.sendInvoice}
            >Zapisz</Button>
        </Jumbotron>
    )
}

export default summary
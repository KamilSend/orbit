import React from 'react'
import {Col, Jumbotron, Row} from "react-bootstrap";

const basicData = (props) =>{
    return(
        <Jumbotron id="basicData">
            <Row>
                <Col><h2>Podstawowe dane</h2></Col>
            </Row>
            <Row>
                <Col>Numer faktury</Col>
                <Col>qwerty123456</Col>
            </Row>
            <Row>
                <Col>Data wystawienia</Col>
                <Col>13.03.2021</Col>
            </Row>
            <Row>
                <Col>Miejsce wystawienia</Col>
                <Col>
                    <input
                        type="text"
                        onChange={(event) => props.inputChange(event, 'place')}
                        value={props.invoice.place}
                    />
                </Col>
            </Row>
            <Row>
                <Col>Data sprzedaży</Col>
                <Col>
                    <input
                        type="date"
                        onChange={(event) => props.inputChange(event, 'saleDate')}
                        value={props.invoice.saleDate}
                    />
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default basicData
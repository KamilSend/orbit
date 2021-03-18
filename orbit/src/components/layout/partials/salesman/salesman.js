import React from 'react'
import {Col, Jumbotron, Row} from "react-bootstrap";

const salesman = (props) =>{
    return(
        <Jumbotron id="salesman">
            <Row>
                <Col><h2>Sprzedawca</h2></Col>
            </Row>
            <Row>
                <Col>Nazwa</Col>
                <Col>Najlepsza drukarnia internetowa</Col>
            </Row>
            <Row>
                <Col>NIP</Col>
                <Col>11122244455</Col>
            </Row>
            <Row>
                <Col>Ulica i numer</Col>
                <Col>ul. Żwirka i Muchomorka 23</Col>
            </Row>
            <Row>
                <Col>Kod pocztowy</Col>
                <Col>12-123</Col>
            </Row>
            <Row>
                <Col>Miejscowość</Col>
                <Col>Warszawa</Col>
            </Row>
        </Jumbotron>
    )
}

export default salesman
import React from 'react'
import {Col, Jumbotron, Row} from "react-bootstrap";

const buyer = (props) =>{
    return(
        <Jumbotron id="buyer">
            <Row>
                <Col><h2>Kontrahent</h2></Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>
                    <select
                        name="contractorType"
                        id="contractor"
                        onChange={(event) => props.inputChange(event, 'type')}
                        value={props.invoice.type}
                    >
                        <option value="firma">Firma</option>
                        <option value="Osoba prywatna">Osoba prywatna</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>NIP</Col>
                <Col>
                    <input
                        type="text"
                        onChange={(event) => props.inputChange(event, 'NIP')}
                        value={props.invoice.NIP}
                    />
                </Col>
            </Row>
            <Row>
                <Col>Nazwa</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'name')}
                    value={props.invoice.name}
                /></Col>
            </Row>
            <Row>
                <Col>Ulica i numer</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'address')}
                    value={props.invoice.address}
                /></Col>
            </Row>
            <Row>
                <Col>Kod pocztowy</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'zipCode')}
                    value={props.invoice.zipCode}
                /></Col>
            </Row>
            <Row>
                <Col>Miejscowość</Col>
                <Col><input
                    type="text"
                    onChange={(event) => props.inputChange(event, 'city')}
                    value={props.invoice.city}
                /></Col>
            </Row>
        </Jumbotron>
    )
}

export default buyer
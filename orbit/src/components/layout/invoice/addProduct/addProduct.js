import React from 'react'
import { Col, Jumbotron, Row} from "react-bootstrap";

const addProduct = (props) => {
    return(
    <>
            <Row>
                <Col>Produkt/Usługa</Col>
                <Col>PKWiU</Col>
                <Col>Ilość</Col>
                <Col>Jednostka</Col>
                <Col>Cena jedn. netto</Col>
            </Row>
            <Row>
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'product')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'PKWiU')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'quantity')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'unit')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'unitNetPrice')}
                />
            </Row>
            <Row>
                <Col>Stawka VAT</Col>
                <Col>Zwolnienie z VAT</Col>
                <Col>Wartość GTU</Col>
                <Col>Wartość VAT</Col>
                <Col>Wartość brutto</Col>
            </Row>
            <Row>
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'VATRate')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'VatExemption')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'GTU')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'VAT')}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'grossValue')}
                />
            </Row>
    </>
    )
}

export default addProduct
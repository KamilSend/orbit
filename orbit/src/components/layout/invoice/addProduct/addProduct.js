import React from 'react'
import { Col, Row} from "react-bootstrap";

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
                       value={props.item.product}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'PKWiU')}
                       value={props.item.PKWiU}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'quantity')}
                       value={props.item.quantity}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'unit')}
                       value={props.item.unit}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'unitNetPrice')}
                       value={props.item.unitNetPrice}
                />
            </Row>
            <Row>
                <Col>Stawka VAT (%)</Col>
                <Col>Zwolnienie z VAT</Col>
                <Col>Wartość netto</Col>
                <Col>Wartość VAT</Col>
                <Col>Wartość brutto</Col>
            </Row>
            <Row>
                <input type="number"
                       onChange={(event) => props.inputChange(event, 'items', 'VATRate')}
                       value={props.item.VATRate}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'VatExemption')}
                       value={props.item.VatExemption}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', '')}
                       value={props.item.unitNetPrice*props.item.quantity}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'VAT')}
                       value={props.item.VAT}
                />
                <input type="text"
                       onChange={(event) => props.inputChange(event, 'items', 'grossValue')}
                       value={props.item.grossValue}
                />
            </Row>
    </>
    )
}

export default addProduct
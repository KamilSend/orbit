import React from 'react'
import {Button, Col, Container, Jumbotron, Row, Table} from "react-bootstrap";
import AddProduct from "../../invoice/addProduct/addProduct";

const productList = (props) =>{

    const itemList = (

        props.items.map((item, index) =>
            <tr>
                <td>{index+1}</td>
                <td>{props.items[index].product}</td>
                <td>{props.items[index].PKWiU}</td>
                <td>{props.items[index].GTU}</td>
                <td>{props.items[index].quantity}</td>
                <td>{props.items[index].unit}</td>
                <td>{props.items[index].unitNetPrice}</td>
                <td>{props.items[index].unitNetPrice*props.items[index].quantity}</td>
                <td>{props.items[index].VAT}</td>
                <td>{props.items[index].VATRate}</td>
                <td>{props.items[index].grossValue}</td>
            </tr>
        )
    )

    return(
        <Jumbotron id="productList">
            <Row>
                <Col><h2>Lista pozycji na fakturze</h2></Col>
            </Row>
            <Table>
                <tbody>
                {itemList}
                </tbody>
            </Table>
            <AddProduct
                inputChange = {props.inputChange}
                item={props.item}
            />
            <Button onClick={props.addItem}>Dodaj pozycję</Button>
        </Jumbotron>
    )
}

export default productList
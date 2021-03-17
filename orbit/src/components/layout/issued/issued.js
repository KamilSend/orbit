import React from 'react'

import { Jumbotron, Col, Row, Table } from 'react-bootstrap';
import './issued.scss'

const issued = (props) =>{

    const itemList = (

         props.invoices[0].items.map((item, index) =>
            <tr>
                <td>{index+1}</td>
                <td>{props.invoices[0].items[index].product}</td>
                <td>{props.invoices[0].items[index].PKWiU}</td>
                <td>{props.invoices[0].items[index].GTU}</td>
                <td>{props.invoices[0].items[index].quantity}</td>
                <td>{props.invoices[0].items[index].unit}</td>
                <td>{props.invoices[0].items[index].unitNetPrice}</td>
                <td>{props.invoices[0].items[index].unitNetPrice*props.invoices[0].items[index].quantity}</td>
                <td>{props.invoices[0].items[index].VAT}</td>
                <td>{props.invoices[0].items[index].VATRate}</td>
                <td>{props.invoices[0].items[index].grossValue}</td>
            </tr>

         )
    )


    return(
        <>
            <div>Wystawione dokumenty:</div>
            <Jumbotron>
                <Row>
                    <Col xs={6}><h2>E-Faktury</h2></Col>
                    <Col xs={6}>
                        <Row>Miejsce wystawienia</Row>
                        <Row>Warszawa</Row>
                        <Row>Data wystawienia</Row>
                        <Row>{props.invoices.issueDate}</Row>
                        <Row>Data wykonania usługi/dostawy towarów</Row>
                        <Row>{props.invoices.saleDate}</Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Row>Sprzedawca</Row>
                        <Row>Najlepsza drukarnia internetowa</Row>
                        <Row>ul. Żwirka i Muchomorka</Row>
                        <Row>12-123 Warszawa, Polska</Row>
                        <Row>NIP 11122244455</Row>
                        <Row>BDO 00099988833</Row>
                    </Col>
                    <Col xs={6}>
                        <Row>Nabywca</Row>
                        <Row>{props.invoices.name}</Row>
                        <Row>{props.invoices.address}</Row>
                        <Row>{props.invoices.zipCode} {props.invoices.city}</Row>
                    </Col>
                </Row>
                <Row>{props.invoices.number}</Row>
                <Row>
                    <Table>
                        <thead>
                            <Col><h2>Lista pozycji na fakturze</h2></Col>
                        <tr>
                            <th>LP.</th>
                            <th>Nazwa towaru lub usługi</th>
                            <th>PKWiU</th>
                            <th>GTU</th>
                            <th>Ilość</th>
                            <th>Jedn.</th>
                            <th>Cena jedn. netto</th>
                            <th>Wartość netto</th>
                            <th>Wartość VAT</th>
                            <th>Stawka VAT</th>
                            <th>Wartość brutto</th>
                        </tr>
                        </thead>
                        <tbody>
                                {itemList}
                        </tbody>
                    </Table>
                </Row>
                <Row>Szczegóły zamówienia</Row>
                <Row>
                    <Col>Transakcja</Col>
                    <Col>{props.invoices.transaction}</Col>
                    <Col>Waluta</Col>
                    <Col>{props.invoices.currency}</Col>
                </Row>
                <Row>
                    <Col>Forma płatności</Col>
                    <Col>{props.invoices.paymentMethod}</Col>
                    <Col>Status płatności</Col>
                    <Col>{props.invoices.paymentStatus}</Col>
                </Row>
                <Row>
                    <Col>Bank</Col>
                    <Col>{props.invoices.account}</Col>
                    <Col>Numer konta</Col>
                    <Col>{props.invoices.accountNumber}</Col>
                </Row>
                <Row>
                    <Col>Płatność do</Col>
                    <Col>{props.invoices.dueDate}</Col>
                    <Col>Sprzedaż realizowana przez</Col>
                    <Col>Najlepsza drukarnia internetowa</Col>
                </Row>
                <Row>
                    <Col>
                        <Row>Imię, nazwisko i podpis osoby</Row>
                        <Row>uprawnionej do odbioru dokumentu</Row>
                    </Col>
                    <Col>
                        <Row>Jan Kowalski</Row>
                        <Row>Imię, nazwisko i podpis osoby</Row>
                        <Row>uprawnionej do wystawienia dokumentu</Row>
                    </Col>
                </Row>
                <Row>Podstawa prawna do wystawienia faktury bez podpisu wystawcy i odbioru jest paragraf Ministra
                Finansów z dnia 29 listopada 2008 r., Dz. U. Nr 212/2008 poz. 1337.</Row>
            </Jumbotron>
        </>
    )
}

export default issued
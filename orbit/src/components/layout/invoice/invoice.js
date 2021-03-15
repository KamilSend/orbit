import React from 'react'

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import './invoice.scss'

const invoice = (props) =>{
    return(
        <>
            <Container>
                <h1>Wystaw nową fakturę Pro forma</h1>
            </Container>
            <Container>
                <Jumbotron>
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
                        <Col>Data sprzedaży</Col>
                        <Col>
                            <input
                                type="date"
                                onChange={(event) => props.inputChange(event, 'saleDate')}
                            />
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
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
                            >
                                <option value="firma">Firma</option>
                                <option value="Osoba prywatna">Osoba prywatna</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Pochodzenie</Col>
                        <Col>
                            <select
                                name="origin"
                                id="origin"
                                onChange={(event) => props.inputChange(event, 'origin')}
                            >
                                <option value="Polska">Polska</option>
                                <option value="Unia europejska">Unia europejska</option>
                                <option value="Z poza Unii europejskiej">Z poza Unii europejskiej</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>NIP</Col>
                        <Col>
                            <input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'NIP')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Nazwa</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'name')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Adres</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'address')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Kod pocztowy</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'zipCode')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Miejscowość</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'city')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Kraj</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'country')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Email</Col>
                        <Col><input
                            type="email"
                            onChange={(event) => props.inputChange(event, 'email')}
                        /></Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col><h2>Płatności</h2></Col>
                    </Row>
                    <Row>
                        <Col>Transakcja</Col>
                        <Col>
                            <select
                                name="transactionType"
                                id="transaction"
                                onChange={(event) => props.inputChange(event, 'transaction')}
                            >
                                <option value="krajowa">Krajowa</option>
                                <option value="zagraniczna">Zagraniczna</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Sposób płatności</Col>
                        <Col>
                            <select
                                name="paymentMethod"
                                id="payment"
                                onChange={(event) => props.inputChange(event, 'paymentMethod')}
                            >
                                <option value="przelew">Przelew</option>
                                <option value="gotówka">Gotówka</option>
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
                            >
                                <option value="nieopłacone">Nieopłacone</option>
                                <option value="opłacone">Opłacone</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Płatność do</Col>
                        <Col><input
                            type="date"
                            onChange={(event) => props.inputChange(event, 'dueDate')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Waluta</Col>
                        <Col>
                            <select
                                name="currencyType"
                                id="currency"
                                onChange={(event) => props.inputChange(event, 'currency')}
                            >
                                <option value="polski złoty">Polski złoty</option>
                                <option value="dolar amerykański">Dolar amerykański</option>
                                <option value="euro">Euro</option>
                                <option value="funt brytyjski">Funt brytyjski</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Konto bankowe</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'account')}
                        /></Col>
                    </Row>
                    <Row>
                        <Col>Numer konta</Col>
                        <Col><input
                            type="text"
                            onChange={(event) => props.inputChange(event, 'accountNumber')}
                        /></Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col><h2>Lista pozycji na fakturze</h2></Col>
                    </Row>
                    <Row>
                        <Col>Produkt/Usługa</Col>
                        <Col>PKWiU</Col>
                        <Col>Ilość</Col>
                        <Col>Jednostka</Col>
                        <Col>Cena jedn. netto</Col>
                    </Row>
                    <Row>
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'product')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'PKWiU')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'quantity')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'unit')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'unitNetPrice')}
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
                               onChange={(event) => props.inputChange(event, 'VATRate')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'VatExemption')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'GTU')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'VAT')}
                        />
                        <input type="text"
                               onChange={(event) => props.inputChange(event, 'grossValue')}
                        />
                    </Row>
                    <Button>Dodaj pozycję</Button>
                </Jumbotron>
                <Jumbotron>
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
            </Container>
        </>


    )
}

export default invoice
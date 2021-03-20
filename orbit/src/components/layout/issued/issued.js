import React from 'react'

import IssuedInvoice from './issuedInvoice/issuedInvoice'

import './issued.scss'

const issued = (props) =>{

    const invoiceList = (
        props.invoices.map((invoice, index) =>
            //jeżeli invoice.open: true
            <IssuedInvoice invoices={props.invoices[index]} invoiceIndex={index}/>
            //jeżeli invoice.open: false <span>invoice.number</span>
            //na spanie onClick który zmienia invoice.open na true
            //na fakturze w rogu krzyżyk który zmienia invoice.open na false
        )
    )

    const receiptList = (
        props.receipts.map((invoice, index) =>
            <IssuedInvoice invoices={props.receipts[index]} invoiceIndex={index}/>
        )
    )

    const prepaymentList = (
        props.prepayments.map((invoice, index) =>
            <IssuedInvoice invoices={props.prepayments[index]} invoiceIndex={index}/>
        )
    )

    return(
        <>
            <div>Wystawione dokumenty:</div>
            <h2>Faktury</h2>
            {invoiceList}
            <h2>Faktury zaliczkowe</h2>
            {prepaymentList}
            <h2>Paragony</h2>
            {receiptList}
        </>
    )
}

export default issued
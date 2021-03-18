import React from 'react'

import IssuedInvoice from './issuedInvoice/issuedInvoice'

import './issued.scss'

const issued = (props) =>{

    const invoiceList = (
        props.invoices.map((invoice, index) =>
            // <IssuedInvoice invoices={props.invoices[index]} itemList={itemList}/>
            <IssuedInvoice invoices={props.invoices[index]} invoiceIndex={index}/>
        )
    )

    return(
        <>
            <div>Wystawione dokumenty:</div>
            {invoiceList}
        </>
    )
}

export default issued
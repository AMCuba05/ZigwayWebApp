import React from 'react'
import './AgentCard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const BorrowerList = ({item})=>{
    return(
        <div className={'card'}>
            <p>ID: {item.id}</p>
            <p>name_en: {item.name_en}</p>
            <p>next loan max amount: {item.next_loan_max_amount}</p>
            <p>borrower number: {item.borrower_number}</p>
            <p>id number: {item.id_number}</p>
            <p>date joined: {item.date_joined}</p>
            <p>date of birth: {item.date_of_birth}</p>
            <p>gender: {item.gender}</p>
            <p>agent: {item.agent}</p>
            <p>education level: {item.education_level}</p>
            <p>remittances from overseas: {item.remittances_from_overseas}</p>
            <p>home address: {item.home_address}</p>
            <p>household expenses low: {item.household_expenses_low}</p>
            <p>household expenses high: {item.household_expenses_high}</p>
            <p>business address: {item.business_address}</p>
            <p>business expenses low: {item.business_expenses_low}</p>
            <p>business expenses high: {item.business_expenses_high}</p>
            <p>comments: {item.comments}</p>
            <Link to={'/loans'} >View Loans</Link>
            <Link to={'/'} > Home</Link>
        </div>
    )
}

export default BorrowerList
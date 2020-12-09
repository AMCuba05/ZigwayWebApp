import React from 'react'
import './AgentCard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const LoanCard = ({item})=>{
    return(
        <div className={'card'}>
            <p>ID: {item.id}</p>
            <p>borrower: {item.borrower}</p>
            <p>guarantor: {item.guarantor}</p>
            <p>Lines:</p>
            {item.lines.map(line => (
                <div className={'card'}>
                    <p>id: {line.id}</p>
                    <p>date: {line.date}</p>
                    <p>principal: {line.principal}</p>
                    <p>fee: {line.fee}</p>
                    <p>interest: {line.interest}</p>
                    <p >penalty: {line.penalty}</p>
                </div>
            ))}
            <p>Repayments</p>
            {item.repayments.map(repayment => (
                <div className={'card'}>
                    <p>:id {repayment.id}</p>
                    <p>date: {repayment.date}</p>
                    <p>amount: {repayment.amount}</p>
                    <p>recorded at: {repayment.recorded_at}</p>
                    <p>loan: {repayment.loan}</p>
                    <p >recorded by: {repayment.recorded_by}</p>
                    <p>reason for delay: {repayment.reason_for_delay}</p>
                    <p>reconciliation status: {repayment.reconciliation_status}</p>
                </div>
            ))}
            <p>loan contract photo: {item.loan_contract_photo}</p>
            <p>contract number: {item.contract_number}</p>
            <p>contract date: {item.contract_date}</p>
            <p>uploaded_at: {item.uploaded_at}</p>
            <p>state: {item.state}</p>
            <p >loan amount: {item.loan_amount}</p>
            <p >loan interest type: {item.loan_interest_type}</p>
            <p >loan interest_duration: {item.loan_interest_duration}</p>
            <p >loan interest rate: {item.loan_interest_rate}</p>
            <p >loan fee: {item.loan_fee}</p>
            <p >late penalty fee: {item.late_penalty_fee}</p>
            <p >late penalty per days: {item.late_penalty_per_x_days}</p>
            <p >late penalty max days: {item.late_penalty_max_days}</p>
            <p >prepayment penalty: {item.prepayment_penalty}</p>
            <p >number of repayments: {item.number_of_repayments}</p>
            <p >normal repayment amount: {item.normal_repayment_amount}</p>
            <p >bullet repayment amount: {item.bullet_repayment_amount}</p>
            <p >comments: {item.comments}</p>
            <Link to={'/borrowers'} >Back</Link>
            <Link to={'/'} > Home</Link>
        </div>
    )
}

export default LoanCard
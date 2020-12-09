import React from 'react'
import './AgentCard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const AgentCard = ({item})=>{
    return(
        <div className={'card'}>
            <p>ID: {item.id}</p>
            <p>user: {item.user}</p>
            <p>name: {item.name}</p>
            <p>last transfer: {item.last_money_transfer}</p>
            <p>phone number: {item.phone_number}</p>
            <Link to={'/borrowers'} >View Borrowers</Link>
        </div>
    )
}

export default AgentCard
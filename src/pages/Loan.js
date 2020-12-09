import React, { useState , useEffect} from 'react'
import LoanCard from '../components/LoanCard'
import axios from 'axios'
import './Agents.css'

const renderItem=(item)=>(
    <LoanCard item={item} />
)

const filter = (loans , filter)=>{
    let response = []
    loans.forEach(function(element, index, ) {
        if (element.borrower === filter) {
            response.push(element)
        }
    })
    return response
}

const Loan = ()=>{
    const [loans , setLoans] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/loans/` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const loans = res.data;
        setLoans(loans)
      }).catch(error => console.log(error))
    })
    return(
        <div className={'container'}>
            {loans != null?
                loans.map(loan => renderItem(loan ))
                :
                <p>loading</p>
            }
        </div>
    )
}

export default Loan
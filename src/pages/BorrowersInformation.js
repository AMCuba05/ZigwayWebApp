import React, { useState , useEffect} from 'react'
import BorrowerList from '../components/BorrowerList'
import axios from 'axios'
import './Agents.css'

const renderItem=(item)=>(
    <BorrowerList item={item} />
)

const BorrowersInformation = ()=>{
    const [borrowers , setBorrowers] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/borrowers/` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const borrowers = res.data;
        setBorrowers(borrowers)
      }).catch(error => console.log(error))
    })
    return(
        <div className={'container'}>
            {borrowers != null?
                borrowers.map(borrower => renderItem(borrower ))
                :
                <p>loading</p>
            }
        </div>
    )
}

export default BorrowersInformation
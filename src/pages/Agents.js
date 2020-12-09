import React, { useState , useEffect} from 'react'
import AgentCard from '../components/AgentCard'
import axios from 'axios'
import './Agents.css'

const renderItem=(item)=>(
    <AgentCard item={item} />
)

const Agents = ()=>{
    const [persons , setPersons] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/agents` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const persons = res.data;
        setPersons(persons)
      }).catch(error => console.log(error))
    })
    return(
        <div className={'container'}>
            {persons != null?
                persons.map(person => renderItem(person ))
                :
                <p>loading</p>
            }
        </div>
    )
}

export default Agents
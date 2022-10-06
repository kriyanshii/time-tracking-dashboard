import React from 'react'
import avatar from '../images/image-jeremy.png'

function Info( {setTimeframe }) {
  return (
    <div className='info-card'>
        <div className="person-info">
          <img src={avatar} alt="" className="hero-img" />
          <div className="text">
          <p>Report for</p>
          <span className= "name">Jeremy Robson</span>
          </div>
        </div>      
        <div className='container'>
          <button onClick = {() => setTimeframe("daily")}>Daily</button>
          <button onClick = {() => setTimeframe("weekly")}>Weekly</button>
          <button onClick = {() => setTimeframe("monthly")}>Monthly</button>
        </div>
    </div>
  )
}

export default Info

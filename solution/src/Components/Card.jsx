import React from 'react'
import eclips from '../images/icon-ellipsis.svg'

export default function Card({ data, timeframe}) {

    let prev = "day";
    switch(timeframe) {
        case "daily":
            prev = "day"
            break;
        case "weekly":
            prev = "week"
            break;
        case "monthly":
            prev = "month"
            break;
        default:
            break;
    }

  return (
    <div className='card' style = {{background: `${data.bgColor}`}}>
        <img src={data.icon}  alt='icon'/>
        <div className='data'>
            <div className="title">
                <p>{data.title}</p>
                <img className='eclips' src={eclips} alt="" />
            </div>
            <div className='timeframes'>
                <span className='current'>
                    {data.timeframes[timeframe].current} hrs
                </span>
                <p className="previous">
                    Last {prev} - {data.timeframes[timeframe].previous} hrs
                </p>
            </div>
        </div>
    </div>
  )
}
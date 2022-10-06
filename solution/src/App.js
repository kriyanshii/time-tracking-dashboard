import './App.css';
import Card from './Components/Card';
import Info from './Components/Info';
import { data } from './Data/data'
import { useState } from 'react';

function App() {
  const [timeframe, setTimeframe] = useState('daily');
  
  return (
    <div className="App">
      {/* <Card key = {1} data = { data[0] } timeframe = {'daily'}/>
      <Card key = {2} data = { data[2] } timeframe = {'weekly'}/>
      <Card key = {3} data = { data[3] } timeframe = {'daily'}/> */}
      <div className='dashboard'>
        <Info setTimeframe = {setTimeframe} />
        <div className='card-container'>
          {data.map((data, index) =>{
            return <Card key = {index} data = {data} timeframe ={timeframe}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

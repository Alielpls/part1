import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Tittle = ({text}) =>{
  //console.log('Tittle: ',props.text);
  return(
    <h1>{text}</h1>
  )
}

const StatisticLine = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistic = (props) =>{
  if(props.all > 0){
    return(
      <table>
        <tbody>
          <StatisticLine text='Bad' value={props.bad}/>
          <StatisticLine text='Neutral' value={props.neutral}/>
          <StatisticLine text='Good' value={props.good}/>
      
          <StatisticLine text='All' value={props.all}/>
          <StatisticLine text='Avarage' value={(props.avarage/props.all).toPrecision(2)}/>
          <StatisticLine text='Positive' value={((props.good/props.all)*100).toPrecision(2)}/>
        </tbody>
    </table>
      
  )
}else{
  return(
    <div>
      <p>No statistics avaliable</p>
    </div>
  )
}
}

const App = () => {

  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [good, setGood] = useState(0)
  const [all, setAll] = useState(0)
  const [avarage, setAvarage] = useState(0)
  

  const setToBad = () =>{
    const newBad = bad+1
    setBad(newBad);
    setAll(newBad + neutral + good);
    setAvarage(avarage-1)
  }
  
  const setToNeutral = () =>{
    const newNeutral = neutral+1
    setNeutral(newNeutral);
    setAll(bad + newNeutral + good);
    setAvarage(avarage)
  }
  const setToGood = () =>{
    const newGood = good+1
    setGood(newGood);
    setAll(bad + neutral + newGood);
    setAvarage(avarage+1)
  }

  return (
   <div>
      <Tittle text='Give feedback' />
      <Button onClick={setToBad} text='Bad'/> 
      <Button onClick={setToNeutral} text='Neutral'/> 
      <Button onClick={setToGood} text='Good'/> 

      <Tittle text='Statistics'/>
      <Statistic bad={bad} neutral={neutral} good={good} all={all} avarage={avarage} />
      
   </div>
  )
}

export default App

import React from 'react'
import './Components/WeatherCard.css'
import './Components/BulkToggle.css'
import WeatherCard from './Components/WeatherCard'
import BulkToggle from './Components/BulkToggle'
// import Calculator from './Components/Calculator'

const App = () => {
  return (
    <>
      <BulkToggle />
      
      <WeatherCard location={"Agra"} />

      {/* <WeatherCard location={"Delhi"} /> */}

      {/* <Calculator/> */}
    </>
  )
}

export default App

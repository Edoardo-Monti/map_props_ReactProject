import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card/Card'
import Header from './component/Header/Header'
import Data from './Data'

function App() {
  
const cards = Data.map((elem, index)=>{
  
  return <Card
            key={index}
            {...elem}
          />    
})
  return (
    <>
      <Header/>
      {cards}
    </>
  )
}

export default App

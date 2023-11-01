import React, { useState } from 'react';


// import React from "react";
import './App.css'

export default function App() {
  const [num, setNum] = useState(0)
  const IncNum = () => {
    setNum(num + 1)
  }
  const DecNum = () => {
    if (num > 0) {
      setNum(num - 1)
    }
    else {
      alert("Number is zero")
      setNum(0)
    }
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{num}</h1>
          <div className='btn_div'>
            <button onClick={IncNum}>Inc</button>
            <button onClick={DecNum}>Dec</button>
          </div>

        </div>
      </div>
    </>
  )
}

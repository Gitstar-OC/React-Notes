import React from 'react'
import { useState, useEffect } from'react'

const RCG = () => {
  const [color, setColor] = useState('#000000')
  const [typeOfColor, setTypeOfColor] = useState('hex')

  useEffect(() => {
    if(typeOfColor === 'hex') handleCRHC()
    else handleCRRC()
  }, [typeOfColor])

  function randomNumber(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCRRC() {
     const r = randomNumber(256)
     const g = randomNumber(256)
     const b = randomNumber(256)
     setColor(`rgb(${r}, ${g}, ${b})`)
  }

  function handleCRHC() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9,' A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)]
    }
    setColor(hexColor)
    console.log(hexColor)
  }


  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color
    }}>
      <button onClick={()=> setTypeOfColor('rgb')}>Create RBG Color</button>
      <button onClick={()=> setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCRHC : handleCRRC}>Generate Random Color</button>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "60px",
      marginTop: "80px",
      flexDirection: "column",
      gap: "20px"
    }}>
      <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
      <h3>{color}</h3>
    </div>
    </div>
  )
}

export default RCG

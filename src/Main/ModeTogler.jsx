import React from 'react'
 import "./App.css"

 const ModeTogler = () => {

    function handleClick() {
        darkModeOn = !darkModeOn
        darkModeOn ? console.log("Darkmode is on") : console.log("Lightmode is on")
      }

    let darkModeOn = true
    const darkmode = <h1>Darkmode is on</h1>
    const lightmode = <h1>Lightmode is on</h1>
    return (
      <div >
        {darkModeOn ? darkmode : lightmode}
        <button onClick={handleClick} className='button_MTG'>Click Me</button>
      </div>
    )
}




export default ModeTogler

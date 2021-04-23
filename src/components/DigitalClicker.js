// Code DigitalClicker Component Here
import React, { useState } from 'react'


export default function DigitalClicker() {

  const [timesClicked, setTimesClicked] = useState(0)
  const handleClick = () => {
    setTimesClicked(timesClicked + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>
        <label>
         {timesClicked}
        </label>
      </button>
    </div>
  )
}

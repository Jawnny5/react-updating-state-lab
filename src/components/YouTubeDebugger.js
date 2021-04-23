// Code YouTubeDebugger Component Here
import React, { useState } from 'react'

export default function YouTubeDebugger() {

  const [specs, setSpecs] = useState(
    {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  )

  const handleClick = (event) => {
    setSpecs(() => {
      return {...specs, settings: {
        bitrate: '12',
        video: {
          resolution: '1080p'
        }
      }}
    })
  }
  
  const handleRes = (event) => {
    setSpecs(() => {
      return {...specs, settings: {
        bitrate: '8',
        video: {
          resolution: '720p'
        }
      }}
    })
  }

  return (
    <div>
      <button 
        className='bitrate'
        onClick={handleClick}
      >   
      </button>
      <button 
        className='resolution'
        onClick={handleRes}
      >   
      </button>
    </div>
  )
}

import React from 'react'

const EventHandling = () => {
  // Event Creation
  const handleButtonClick = () => {
    alert("You are at the right place😁")
  }
  return (
    <div>
      <h1>Event Handling Example</h1>
      {/* Event Listener */}
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default EventHandling
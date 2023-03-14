import React from 'react'

const FunctionEvent = () => {
    
  const handleClick = () => {
    console.log('Button is clicked')
  }

  return (
    <div>
        <h3>
            Function Event Component
        </h3>

        <button type="button" onClick={handleClick}>
            Click Here
        </button>
    </div>
  )
}

export default FunctionEvent
 // src/components/PlaceholderImage.jsx
import React from 'react'

const PlaceholderImage = ({ width = 400, height = 400, text = 'Sneaker Image' }) => {
  return (
    <div 
      className="bg-dark d-flex align-items-center justify-content-center rounded-3"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        background: 'linear-gradient(45deg, #1a1a2e, #16213e)'
      }}
    >
      <div className="text-center">
        <div className="neon-text mb-2">👟</div>
        <small className="text-gray">{text}</small>
      </div>
    </div>
  )
}

export default PlaceholderImage
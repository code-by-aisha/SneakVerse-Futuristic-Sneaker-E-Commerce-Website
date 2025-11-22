 // src/components/ProductCard.jsx
import React, { useRef, useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import PlaceholderImage from './PlaceholderImage'

const ProductCard = ({ product }) => {
  const cardRef = useRef(null)
  const { addToCart } = useCart()
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    // Throttle mousemove updates via requestAnimationFrame to avoid layout thrash
    if (card._rafPending) return
    card._rafPending = true
    window.requestAnimationFrame(() => {
      const cardRect = card.getBoundingClientRect()
      const x = e.clientX - cardRect.left
      const y = e.clientY - cardRect.top

      const centerX = cardRect.width / 2
      const centerY = cardRect.height / 2

      const rotateY = (x - centerX) / 25
      const rotateX = (centerY - y) / 25

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
      card._rafPending = false
    })
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.sizes[0])
  }

  return (
    <Card 
      ref={cardRef}
      className="h-100 border-0 glass-card tilt-card overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
    >
      <div className="position-relative overflow-hidden">
        {!imageLoaded && (
          <PlaceholderImage width={400} height={250} text={product.name} />
        )}
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ 
            height: '250px', 
            objectFit: 'cover',
            display: imageLoaded ? 'block' : 'none'
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
        {product.trending && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 end-0 m-2 neon-glow"
          >
            TRENDING
          </Badge>
        )}
        <div className="position-absolute bottom-0 start-0 end-0 p-3">
          <Button 
            variant="primary" 
            size="sm" 
            className="btn-neon w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="text-light fs-6 mb-1">
            {product.name}
          </Card.Title>
          <Badge bg="outline-light" className="text-light">
            {product.brand}
          </Badge>
        </div>
        
        <Card.Text className="text-gray small flex-grow-1">
          {product.description.slice(0, 80)}...
        </Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 neon-text mb-0">${product.price}</span>
          <Button 
            as={Link} 
            to={`/product/${product.id}`}
            variant="outline-light" 
            size="sm"
            className="border-0"
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
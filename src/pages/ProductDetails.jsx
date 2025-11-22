
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form, Badge, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Context/CartContext'
import { products } from '../data/Products'
import ProductCard from '../components/ProductCard'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [showAlert, setShowAlert] = useState(false)

  const product = products.find(p => p.id === parseInt(id))
  const relatedProducts = products
    .filter(p => p.brand === product?.brand && p.id !== product.id)
    .slice(0, 4)

  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0])
    }
  }, [product])

  if (!product) {
    return (
      <Container className="py-5 text-center" style={{ paddingTop: '100px' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-neon">
          Back to Shop
        </Link>
      </Container>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowAlert(true)
      return
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize)
    }
    setShowAlert(false)
  }

  return (
    <Container className="py-5" style={{ paddingTop: '100px' }}>
      <Row className="g-5">
        {/* Product Images */}
        <Col lg={6}>
          <div className="glass-card p-4 rounded-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="img-fluid rounded-3 w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <div className="d-flex gap-3 mt-3">
              {[1, 2, 3].map((thumb, index) => (
                <div 
                  key={index}
                  className="glass-card p-2 rounded-3 flex-grow-1"
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={product.image} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="img-fluid rounded-2"
                    style={{ height: '80px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Product Info */}
        <Col lg={6}>
          <div className="glass-card p-4 rounded-4 h-100">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <Badge bg="outline-light" className="text-light mb-2">
                  {product.brand}
                </Badge>
                {product.trending && (
                  <Badge bg="danger" className="ms-2 neon-glow">
                    TRENDING
                  </Badge>
                )}
              </div>
              <div className="d-flex gap-2">
                <Button variant="outline-light" size="sm" className="border-0">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button variant="outline-light" size="sm" className="border-0">
                  <FontAwesomeIcon icon={faShare} />
                </Button>
              </div>
            </div>

            <h1 className="text-light mb-3">{product.name}</h1>
            <h2 className="neon-text mb-4">${product.price}</h2>

            <p className="text-gray mb-4">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-4">
              <Form.Label className="text-light fw-semibold">
                Select Size: {selectedSize}
              </Form.Label>
              <div className="d-flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "primary" : "outline-light"}
                    className={`border-2 rounded-pill px-3 ${selectedSize === size ? 'btn-neon' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <Form.Label className="text-light fw-semibold">Quantity</Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Button
                  variant="outline-light"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border-2 rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  -
                </Button>
                <span className="text-light fw-bold fs-5">{quantity}</span>
                <Button
                  variant="outline-light"
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-2 rounded-circle"
                  style={{ width: '40px', height: '40px' }}
                >
                  +
                </Button>
              </div>
            </div>

            {showAlert && (
              <Alert variant="warning" className="mb-4">
                Please select a size before adding to cart.
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                className="btn-neon flex-grow-1"
                onClick={handleAddToCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline-light" 
                className="border-2 flex-grow-1"
              >
                Buy Now
              </Button>
            </div>

            {/* Product Details */}
            <div className="mt-5">
              <h5 className="text-light mb-3">Product Details</h5>
              <Row className="text-gray">
                <Col sm={6}>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>Color:</strong> {product.color}</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Style:</strong> Athletic</p>
                  <p><strong>Material:</strong> Premium Synthetic</p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h3 className="orbitron neon-text mb-4">You Might Also Like</h3>
            <Row className="g-4">
              {relatedProducts.map(product => (
                <Col key={product.id} lg={3} md={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ProductDetails
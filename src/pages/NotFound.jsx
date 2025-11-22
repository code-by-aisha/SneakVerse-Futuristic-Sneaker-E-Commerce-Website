
import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const NotFound = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo('.not-found-title',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    )
    .fromTo('.not-found-sneaker',
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo('.not-found-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.3"
    )
  }, [])

  return (
    <Container 
      ref={containerRef}
      className="py-5 text-center d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', paddingTop: '100px' }}
    >
      <Row>
        <Col>
          {/* Animated Sneaker */}
          <div className="not-found-sneaker mb-4">
            <div 
              className="glass-card p-4 rounded-4 mx-auto"
              style={{ maxWidth: '200px' }}
            >
              <img 
                src="/api/placeholder/150/150" 
                alt="Lost Sneaker"
                className="img-fluid"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
                }}
              />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="not-found-title orbitron neon-text display-1 mb-3">
            404
          </h1>
          
          <h2 className="not-found-text text-light mb-3">
            Page Not Found
          </h2>
          
          <p className="not-found-text text-gray lead mb-4">
            Oops! It looks like you've taken a wrong step. 
            The page you're looking for doesn't exist.
          </p>

          <Button as={Link} to="/" className="btn-neon not-found-text">
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
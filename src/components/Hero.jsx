import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const sneakerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Text animation
    tl.fromTo(textRef.current.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    )

    // Sneaker floating animation
    tl.fromTo(sneakerRef.current,
      { y: 0 },
      { 
        y: 20, 
        duration: 2, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut" 
      },
      "-=0.5"
    )

    // Background elements animation
    const backgroundElements = heroRef.current.querySelectorAll('.bg-element')
    gsap.fromTo(backgroundElements,
      { scale: 0, rotation: 0 },
      {
        scale: 1,
        rotation: 360,
        duration: 2,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="hero-section position-relative overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--dark-bg) 0%, #1a1a2e 50%, #16213e 100%)',
        paddingTop: '100px'
      }}
    >
      {/* Animated Background Elements */}
      <div 
        className="bg-element position-absolute rounded-circle"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
          opacity: 0.1
        }}
      ></div>
      <div 
        className="bg-element position-absolute rounded-circle"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
          bottom: '20%',
          right: '15%',
          opacity: 0.1
        }}
      ></div>

      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col lg={6} ref={textRef}>
            <h1 className="display-3 fw-bold mb-4 orbitron">
              Step Into The <span className="neon-text">Future</span>
            </h1>
            <p className="lead mb-4 text-gray">
              Discover the most exclusive sneakers from top brands. 
              Limited editions, futuristic designs, and premium comfort await you.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button as={Link} to="/shop" size="lg" className="btn-neon">
                Shop Now
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                className="border-2 rounded-pill px-4"
              >
                Explore Collection
              </Button>
            </div>
            
            <div className="mt-5 d-flex gap-4">
              <div className="text-center">
                <h3 className="neon-text fw-bold">200+</h3>
                <p className="text-gray mb-0">Premium Brands</p>
              </div>
              <div className="text-center">
                <h3 className="neon-text fw-bold">5K+</h3>
                <p className="text-gray mb-0">Sneakers</p>
              </div>
              <div className="text-center">
                <h3 className="neon-text fw-bold">50K+</h3>
                <p className="text-gray mb-0">Happy Customers</p>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div 
              ref={sneakerRef}
              className="sneaker-display position-relative"
            >
              <div 
                className="glass-card mx-auto p-4 rounded-4 d-inline-block"
                style={{ maxWidth: '520px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}
              >
                <img 
                  src="/Images/hero/sneeker.jpg"
                  alt="Premium Sneaker"
                  className="img-fluid rounded-3"
                  style={{
                    maxHeight: '420px',
                    width: '100%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'
                  }}
                />
              </div>
              {/* Floating elements */}
              <div 
                className="position-absolute rounded-pill px-3 py-1 glass-card"
                style={{ top: '20%', left: '10%' }}
              >
                <small className="neon-text fw-bold">NEW</small>
              </div>
              <div 
                className="position-absolute rounded-pill px-3 py-1 glass-card"
                style={{ bottom: '30%', right: '10%' }}
              >
                <small className="neon-text fw-bold">TRENDING</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
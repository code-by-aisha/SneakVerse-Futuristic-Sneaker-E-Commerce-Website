
import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { gsap } from 'gsap'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
          )
        }
      })
    }, { threshold: 0.1 })

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Brand Partners' },
    { number: '5K+', label: 'Sneakers' },
    { number: '24/7', label: 'Support' }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'Every sneaker is carefully curated and authenticated to ensure premium quality.',
      icon: '★'
    },
    {
      title: 'Fast Shipping',
      description: 'Free express shipping on all orders with real-time tracking and quick delivery.',
      icon: '🚚'
    },
    {
      title: 'Community Driven',
      description: 'We build relationships with sneaker enthusiasts and create exclusive drops.',
      icon: '👥'
    },
    {
      title: 'Innovation',
      description: 'Always at the forefront of sneaker technology and fashion trends.',
      icon: '💡'
    }
  ]

  return (
    <div ref={sectionRef} style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="orbitron neon-text mb-4 animate-on-scroll">
                About SneakVerse
              </h1>
              <p className="lead text-gray animate-on-scroll">
                Where sneaker culture meets the future. We're revolutionizing the way 
                enthusiasts discover, collect, and wear the world's most exclusive sneakers.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col key={index} lg={3} md={6}>
                <div className="text-center animate-on-scroll">
                  <h2 className="neon-text orbitron mb-2">{stat.number}</h2>
                  <p className="text-gray mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="animate-on-scroll">
                <h2 className="orbitron neon-text mb-4">Our Story</h2>
                <p className="text-gray mb-4">
                  Founded in 2020, SneakVerse emerged from a simple passion for sneakers 
                  and a vision to create a premium destination for collectors and enthusiasts alike.
                </p>
                <p className="text-gray mb-4">
                  What started as a small community of sneakerheads has grown into a 
                  global platform connecting brands, artists, and enthusiasts in the 
                  ever-evolving world of sneaker culture.
                </p>
                <p className="text-gray">
                  Today, we continue to push boundaries, bringing you the most 
                  exclusive drops, limited editions, and future classics before anyone else.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div 
                className="glass-card p-5 rounded-4 animate-on-scroll"
                style={{ minHeight: '400px' }}
              >
                <img 
                  src="/Images/products/brown%20sneaker.jpg" 
                  alt="SneakVerse Story - Brown Sneaker"
                  className="img-fluid rounded-3 w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="orbitron neon-text text-center mb-4 animate-on-scroll">
                Our Values
              </h2>
            </Col>
          </Row>
          <Row className="g-4">
            {values.map((value, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="border-0 glass-card h-100 animate-on-scroll">
                  <Card.Body className="text-center p-4">
                    <div 
                      className="neon-glow rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: '60px', height: '60px', fontSize: '24px' }}
                    >
                      {value.icon}
                    </div>
                    <Card.Title className="text-light mb-3">
                      {value.title}
                    </Card.Title>
                    <Card.Text className="text-gray">
                      {value.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-on-scroll">
                <h2 className="orbitron neon-text mb-4">Our Mission</h2>
                <p className="lead text-gray">
                  To empower sneaker culture by providing a premium, authentic, and 
                  innovative platform that connects enthusiasts with their dream kicks, 
                  while pushing the boundaries of what's possible in sneaker retail.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About
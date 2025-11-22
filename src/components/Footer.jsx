import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark pt-5 pb-3 mt-5">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <h3 className="orbitron neon-text mb-3">SneakVerse</h3>
            <p className="text-gray mb-4">
              Your premier destination for exclusive sneakers from top brands. 
              Step into the future of sneaker culture with us.
            </p>
            <div className="d-flex gap-3">
              {['Twitter', 'Instagram', 'Facebook', 'TikTok'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray text-decoration-none hover-neon"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  {social}
                </a>
              ))}
            </div>
          </Col>

          <Col lg={2} md={4}>
            <h6 className="text-light mb-3">Shop</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/shop" className="text-gray text-decoration-none">
                All Sneakers
              </Link>
              <Link to="/shop?brand=Nike" className="text-gray text-decoration-none">
                Nike
              </Link>
              <Link to="/shop?brand=Adidas" className="text-gray text-decoration-none">
                Adidas
              </Link>
              <Link to="/shop?brand=New Balance" className="text-gray text-decoration-none">
                New Balance
              </Link>
            </div>
          </Col>

          <Col lg={2} md={4}>
            <h6 className="text-light mb-3">Support</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-gray text-decoration-none">
                Contact Us
              </a>
              <a href="#" className="text-gray text-decoration-none">
                Shipping Info
              </a>
              <a href="#" className="text-gray text-decoration-none">
                Returns
              </a>
              <a href="#" className="text-gray text-decoration-none">
                Size Guide
              </a>
            </div>
          </Col>

          <Col lg={2} md={4}>
            <h6 className="text-light mb-3">Company</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/about" className="text-gray text-decoration-none">
                About Us
              </Link>
              <a href="#" className="text-gray text-decoration-none">
                Careers
              </a>
              <a href="#" className="text-gray text-decoration-none">
                Press
              </a>
              <a href="#" className="text-gray text-decoration-none">
                Terms
              </a>
            </div>
          </Col>

          <Col lg={2}>
            <h6 className="text-light mb-3">Newsletter</h6>
            <p className="text-gray small mb-3">
              Get exclusive access to limited drops and special promotions.
            </p>
            <div className="d-flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="form-control bg-dark border-dark text-light me-2"
                style={{ fontSize: '0.9rem' }}
              />
              <button className="btn btn-primary btn-sm">Join</button>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <Row>
          <Col>
            <p className="text-gray text-center mb-0">
              &copy; 2024 SneakVerse. All rights reserved. Step into the future.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
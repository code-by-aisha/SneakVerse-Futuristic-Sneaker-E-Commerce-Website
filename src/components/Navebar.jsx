
import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Context/CartContext'
import { gsap } from 'gsap'

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { getCartItemsCount } = useCart()
  const location = useLocation()
  const cartItemsCount = getCartItemsCount()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Navbar animation on route change
    gsap.fromTo('.navbar-brand, .nav-link', 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    )
  }, [location])

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 transition-all ${scrolled ? 'glass-card' : 'bg-transparent'}`}
      style={{
        background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="orbitron fs-3 neon-text fw-bold">
          SneakVerse
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0"
          style={{ color: 'var(--neon-purple)' }}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`mx-2 fw-semibold ${location.pathname === '/' ? 'neon-text' : 'text-light'}`}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/shop" 
              className={`mx-2 fw-semibold ${location.pathname === '/shop' ? 'neon-text' : 'text-light'}`}
            >
              Shop
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`mx-2 fw-semibold ${location.pathname === '/about' ? 'neon-text' : 'text-light'}`}
            >
              About
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link className="text-light mx-2 position-relative">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link className="text-light mx-2">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className="text-light mx-2 position-relative"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItemsCount > 0 && (
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
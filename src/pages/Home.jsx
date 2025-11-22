 // src/pages/Home.jsx
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ReviewSlider from '../components/ReviewSlider'
import { products } from '../data/Products'

const Home = () => {
  const trendingProducts = products.filter(product => product.trending)
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      <Hero />
      
      {/* Trending Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="text-center orbitron neon-text mb-3">
                Trending Now
              </h2>
              <p className="text-center text-gray">
                Discover the most wanted sneakers of the moment
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {trendingProducts.map(product => (
              <Col key={product.id} lg={3} md={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="text-center orbitron neon-text mb-3">
                Shop By Brand
              </h2>
            </Col>
          </Row>
          <Row className="g-4">
            {['Nike', 'Adidas', 'New Balance', 'Puma'].map(brand => (
              <Col key={brand} lg={3} md={6}>
                <div 
                  className="glass-card text-center p-5 rounded-4 tilt-card"
                  style={{ cursor: 'pointer', minHeight: '200px' }}
                >
                  <h4 className="neon-text orbitron">{brand}</h4>
                  <p className="text-gray">Explore Collection</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="text-center orbitron neon-text mb-3">
                Featured Collection
              </h2>
              <p className="text-center text-gray">
                Curated selection of premium sneakers
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {featuredProducts.map(product => (
              <Col key={product.id} lg={3} md={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="py-5" style={{ background: 'var(--dark-card)' }}>
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="text-center orbitron neon-text mb-3">
                What Our Customers Say
              </h2>
            </Col>
          </Row>
          <ReviewSlider />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="orbitron neon-text mb-4">
                Ready to Step Up Your Style?
              </h2>
              <p className="lead text-gray mb-4">
                Join thousands of sneaker enthusiasts and discover your next favorite pair.
              </p>
              <button className="btn-neon btn-lg">
                Explore All Sneakers
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
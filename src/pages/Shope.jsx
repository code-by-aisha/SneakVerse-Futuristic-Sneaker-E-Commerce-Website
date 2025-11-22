import React, { useState, useMemo } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import { products, brands, colors } from '../data/Products'

const Shop = () => {
  // compute max price from products so filters don't accidentally exclude all items
  const maxPrice = products && products.length ? Math.max(...products.map(p => p.price)) : 500

  const [filters, setFilters] = useState({
    brand: '',
    color: '',
    priceRange: [0, maxPrice],
    search: ''
  })

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const brandNorm = product.brand?.toString().trim().toLowerCase()
      const colorNorm = product.color?.toString().trim().toLowerCase()
      const nameNorm = product.name?.toString().trim().toLowerCase()
      const searchNorm = filters.search?.toString().trim().toLowerCase()
      const brandFilter = filters.brand?.toString().trim().toLowerCase()
      const colorFilter = filters.color?.toString().trim().toLowerCase()

      const matchesBrand = !filters.brand || brandNorm === brandFilter
      const matchesColor = !filters.color || colorNorm === colorFilter
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const matchesSearch = !filters.search ||
        nameNorm.includes(searchNorm) ||
        brandNorm.includes(searchNorm)

      return matchesBrand && matchesColor && matchesPrice && matchesSearch
    })
  }, [filters])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      brand: '',
      color: '',
      priceRange: [0, 500],
      search: ''
    })
  }

  return (
    <Container className="py-5" style={{ paddingTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="orbitron neon-text text-center mb-5">Shop All Sneakers</h1>
        </Col>
      </Row>

      <Row>
        {/* Filters Sidebar */}
        <Col lg={3} className="mb-4">
          <div className="glass-card p-4 rounded-4 sticky-top" style={{ top: '120px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="neon-text mb-0">
                <FontAwesomeIcon icon={faFilter} className="me-2" />
                Filters
              </h5>
              <Button 
                variant="outline-light" 
                size="sm" 
                onClick={clearFilters}
                className="border-0"
              >
                Clear
              </Button>
            </div>

            {/* Search */}
            <div className="mb-4">
              <InputGroup>
                <Form.Control
                  placeholder="Search sneakers..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="bg-dark border-dark text-light"
                />
                <InputGroup.Text className="bg-dark border-dark">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup>
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
              <Form.Label className="text-light fw-semibold">Brand</Form.Label>
              <Form.Select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="bg-dark border-dark text-light"
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </Form.Select>
            </div>

            {/* Color Filter */}
            <div className="mb-4">
              <Form.Label className="text-light fw-semibold">Color</Form.Label>
              <Form.Select
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                className="bg-dark border-dark text-light"
              >
                <option value="">All Colors</option>
                {colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </Form.Select>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <Form.Label className="text-light fw-semibold">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </Form.Label>
              <Form.Range
                min={0}
                max={maxPrice}
                step={Math.max(1, Math.floor(maxPrice / 100))}
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                className="custom-range"
              />
            </div>
          </div>
        </Col>

        {/* Products Grid */}
        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="text-gray mb-0">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <Row className="g-4">
              {filteredProducts.map(product => (
                <Col key={product.id} xl={4} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <h4 className="text-light mb-3">No products found</h4>
              <p className="text-gray mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button 
                variant="outline-light" 
                onClick={clearFilters}
                className="btn-neon"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Shop
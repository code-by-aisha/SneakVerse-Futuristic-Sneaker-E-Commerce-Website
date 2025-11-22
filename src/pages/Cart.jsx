
import React from 'react'
import { Container, Row, Col, Table, Button, Form, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Context/CartContext'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center" style={{ paddingTop: '100px', minHeight: '60vh' }}>
        <div className="glass-card p-5 rounded-4 mx-auto" style={{ maxWidth: '500px' }}>
          <FontAwesomeIcon 
            icon={faShoppingBag} 
            className="text-gray mb-4"
            size="3x"
          />
          <h3 className="text-light mb-3">Your Cart is Empty</h3>
          <p className="text-gray mb-4">
            Discover our amazing collection of sneakers and find your perfect pair.
          </p>
          <Button as={Link} to="/shop" className="btn-neon">
            Start Shopping
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-5" style={{ paddingTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="orbitron neon-text mb-5">Shopping Cart</h1>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <div className="glass-card p-4 rounded-4">
            <Table responsive className="text-light align-middle mb-0">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={`${item.id}-${item.size}`}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="rounded-3 me-3"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="mb-1 text-light">{item.name}</h6>
                          <small className="text-gray">{item.brand}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-light">{item.size}</span>
                    </td>
                    <td>
                      <span className="neon-text">${item.price}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="outline-light"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="border-2 rounded-circle p-0"
                          style={{ width: '30px', height: '30px' }}
                        >
                          <FontAwesomeIcon icon={faMinus} size="xs" />
                        </Button>
                        <span className="text-light mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-light"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="border-2 rounded-circle p-0"
                          style={{ width: '30px', height: '30px' }}
                        >
                          <FontAwesomeIcon icon={faPlus} size="xs" />
                        </Button>
                      </div>
                    </td>
                    <td>
                      <span className="neon-text fw-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="border-0"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <Button 
                as={Link} 
                to="/shop" 
                variant="outline-light"
                className="border-2"
              >
                Continue Shopping
              </Button>
              <Button 
                variant="outline-danger"
                onClick={clearCart}
                className="border-2"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <div className="glass-card p-4 rounded-4 sticky-top" style={{ top: '120px' }}>
            <h4 className="text-light mb-4">Order Summary</h4>
            
            <div className="d-flex justify-content-between mb-3">
              <span className="text-gray">Subtotal</span>
              <span className="text-light">${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-3">
              <span className="text-gray">Shipping</span>
              <span className="text-light">$0.00</span>
            </div>
            
            <div className="d-flex justify-content-between mb-3">
              <span className="text-gray">Tax</span>
              <span className="text-light">${(getCartTotal() * 0.08).toFixed(2)}</span>
            </div>
            
            <hr className="my-4" />
            
            <div className="d-flex justify-content-between mb-4">
              <span className="text-light fw-bold">Total</span>
              <span className="neon-text fw-bold fs-5">
                ${(getCartTotal() * 1.08).toFixed(2)}
              </span>
            </div>

            <Button className="btn-neon w-100 mb-3">
              Proceed to Checkout
            </Button>

            <Form className="mt-3">
              <Form.Group>
                <Form.Control
                  placeholder="Discount code"
                  className="bg-dark border-dark text-light mb-2"
                />
                <Button variant="outline-light" className="w-100 border-2">
                  Apply Code
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
import React, { useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const ToastNotification = () => {
  const { showToast, toastMessage, hideToast } = useCart()

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        hideToast()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showToast, hideToast])

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast 
        show={showToast} 
        onClose={hideToast}
        className="glass-card border-0"
        style={{ background: 'rgba(255, 255, 255, 0.1)' }}
      >
        <Toast.Header className="border-0">
          <strong className="me-auto neon-text">SneakVerse</strong>
        </Toast.Header>
        <Toast.Body className="text-light">
          {toastMessage}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastNotification
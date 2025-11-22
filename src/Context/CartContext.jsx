 // src/context/CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload || [],
        loading: false
      };
    
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem('sneakverse_cart', JSON.stringify(newItems));
      return {
        ...state,
        items: newItems,
        showToast: true,
        toastMessage: 'Added to cart!'
      };

    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter(
        item => !(item.id === action.payload.id && item.size === action.payload.size)
      );
      localStorage.setItem('sneakverse_cart', JSON.stringify(filteredItems));
      return {
        ...state,
        items: filteredItems,
        showToast: true,
        toastMessage: 'Removed from cart'
      };

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      localStorage.setItem('sneakverse_cart', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };

    case 'CLEAR_CART':
      localStorage.removeItem('sneakverse_cart');
      return { ...state, items: [] };

    case 'HIDE_TOAST':
      return { ...state, showToast: false };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  loading: true,
  showToast: false,
  toastMessage: ''
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('sneakverse_cart');
    dispatch({ type: 'LOAD_CART', payload: savedCart ? JSON.parse(savedCart) : [] });
  }, []);

  const addToCart = (product, size) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, size } });
  };

  const removeFromCart = (productId, size) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId, size } });
  };

  const updateQuantity = (productId, size, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const hideToast = () => {
    dispatch({ type: 'HIDE_TOAST' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart: state.items,
      loading: state.loading,
      showToast: state.showToast,
      toastMessage: state.toastMessage,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      hideToast,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
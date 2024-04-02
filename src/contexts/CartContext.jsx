/* eslint react/prop-types: 0 */
import { createContext, useState } from 'react';

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemInCart: () => {},
  clearItemInCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = product => {
    // check if the product exist in the cartItems
    const existingItem = cartItems.find(item => item.id === product.id);

    // if product exist increase the quantity by 1
    if (existingItem) {
      return setCartItems(
        cartItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }

    // if no product add to cartItems array and add a quantity property
    return setCartItems(prevItems => [
      ...prevItems,
      { ...product, quantity: 1 },
    ]);
  };

  const clearItemInCart = productId => {
    return setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const deleteItemInCart = product => {
    // find the exising item in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem.quantity === 1) {
      return setCartItems(cartItems.filter(item => item.id !== product.id));
    }

    return setCartItems(
      cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    deleteItemInCart,
    clearItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };

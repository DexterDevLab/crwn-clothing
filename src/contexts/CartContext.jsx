/* eslint react/prop-types: 0 */
import { createContext, useState } from 'react';

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = product => {
    // check if the product exist in the cartItems
    const itemIndex = cartItems.findIndex(item => item.id === product.id);

    // if product exist increase the quantity by 1
    if (itemIndex !== -1) {
      // const newCartItems = [...cartItems];
      // newCartItems[itemIndex].quantity++;
      // return setCartItems(newCartItems);

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

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };

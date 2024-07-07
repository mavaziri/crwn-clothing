import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  console.log('productToAdd', productToAdd);
  console.log('cartItems1', cartItems);

  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map(
      (cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      //   {
      //   if (cartItem.id === productToAdd.id) {
      //     console.log('1', { ...cartItem, quantity: cartItem.quantity + 1 });
      //     return { ...cartItem, quantity: cartItem.quantity + 1 };
      //   } else {
      //     console.log('2', cartItem);
      //     return cartItem;
      //   }
      // }
    );
  }

  // return new array with modified cartItems/ new cart item
  console.log('cartItems2', [...cartItems, { ...productToAdd, quantity: 1 }]);
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCardOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

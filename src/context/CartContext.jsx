// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const exists = cart.find((p) => p.id === id);
    if (exists.count === 1) {
      setCart(cart.filter((p) => p.id !== id));
    } else {
      setCart(
        cart.map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
      );
    }
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


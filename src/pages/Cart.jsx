import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formatPrice } from "../utils/format";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQty = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter((pizza) => pizza.quantity > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="row">
            {cart.map((pizza) => (
              <div className="col-md-6 mb-3" key={pizza.id}>
                <div className="card d-flex flex-row align-items-center p-2">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h5>{pizza.name}</h5>
                    <p>Precio: ${formatPrice(pizza.price)}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-sm btn-danger me-2" onClick={() => decreaseQty(pizza.id)}>-</button>
                      <span>{pizza.quantity}</span>
                      <button className="btn btn-sm btn-success ms-2" onClick={() => increaseQty(pizza.id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <h4 className="text-end">Total: ${formatPrice(total)}</h4>
          <div className="text-end">
            <button className="btn btn-primary mt-2">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

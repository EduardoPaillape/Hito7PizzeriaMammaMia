import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatPrice } from "../utils/format";
import { useState } from "react";

const Cart = () => {
  const { cart, total, addToCart, removeFromCart } = useCart();
  const { token } = useUser();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    const res = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    if (res.ok) {
      setMessage("✅ ¡Compra realizada con éxito!");
    } else {
      setMessage("❌ Error al procesar la compra.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
          <img src={pizza.img} alt={pizza.name} width="80" />
          <span>{pizza.name}</span>
          <div>
            <button className="btn btn-sm btn-secondary mx-1" onClick={() => removeFromCart(pizza.id)}>-</button>
            <span>{pizza.count}</span>
            <button className="btn btn-sm btn-secondary mx-1" onClick={() => addToCart(pizza)}>+</button>
          </div>
          <span>${formatPrice(pizza.price * pizza.count)}</span>
        </div>
      ))}
      <h4 className="mt-3">Total: ${formatPrice(total)}</h4>
      <button className="btn btn-success mt-3" onClick={handleCheckout} disabled={!token}>
        Pagar
      </button>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Cart;

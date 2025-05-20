import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

const Cart = () => {
  const { cart, increment, decrement, total } = useCart();

  return (
    <div className="container my-5">
      <h2>🛒 Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center border-bottom py-3">
              <img src={item.img} alt={item.name} width={100} className="me-3" />
              <div className="flex-grow-1">
                <h5 className="text-capitalize">{item.name}</h5>
                <p>Precio unitario: ${formatPrice(item.price)}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrement(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increment(item.id)}>+</button>
                </div>
              </div>
              <strong className="ms-auto">${formatPrice(item.price * item.count)}</strong>
            </div>
          ))}
          <hr />
          <h4>Total: ${formatPrice(total)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;

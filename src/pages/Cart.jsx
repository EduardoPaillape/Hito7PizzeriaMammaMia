import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { token } = useUser();

  return (
    <div className="container my-5">
      <h2>Carrito</h2>
      {/* Aquí se listarían los productos del carrito */}
      <button className="btn btn-success" disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;


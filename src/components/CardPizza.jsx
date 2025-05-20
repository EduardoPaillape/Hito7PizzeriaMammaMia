import { formatPrice } from "../utils/format";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price, img });
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${formatPrice(price)}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-secondary">Ver más</button>
          <button className="btn btn-dark" onClick={handleAdd}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;


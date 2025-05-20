import { formatPrice } from "../utils/format";
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img }) => (
  <div className="card">
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <ul>
        {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <p className="card-text">${price}</p>
      <Link to={`/pizza/${id}`} className="btn btn-outline-secondary">Ver más</Link>
    </div>
  </div>
);

export default CardPizza;


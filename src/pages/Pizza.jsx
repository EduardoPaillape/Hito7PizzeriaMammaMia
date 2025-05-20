import { useEffect, useState } from "react";
import { formatPrice } from "../utils/format";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar la pizza:", err));
  }, []);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{pizza.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4>Precio: ${formatPrice(pizza.price)}</h4>
          <p className="mt-3">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <button className="btn btn-dark mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

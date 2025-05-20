import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch(console.error);
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container my-5">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <h4>Precio: ${pizza.price}</h4>
    </div>
  );
};

export default Pizza;
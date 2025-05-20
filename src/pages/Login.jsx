import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError(true);
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError(true);
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    
    setError(false);
    setMessage("✅ Inicio de sesión exitoso.");
    
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>

      {message && (
        <div className={`alert mt-3 ${error ? "alert-danger" : "alert-success"}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;

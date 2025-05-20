import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

const Profile = () => {
  const { getProfile, logout } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then(setUser).catch(console.error);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Profile;

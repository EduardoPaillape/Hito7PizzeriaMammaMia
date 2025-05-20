export default function Profile() {
  const email = "usuario@ejemplo.com"
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={() => alert("Sesión cerrada (simulado)")}>Cerrar sesión</button>
    </div>
  )
}

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
    } else {
      throw new Error(data.message || "Error al iniciar sesión");
    }
  };

  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
    } else {
      throw new Error(data.message || "Error al registrarse");
    }
  };

  const logout = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

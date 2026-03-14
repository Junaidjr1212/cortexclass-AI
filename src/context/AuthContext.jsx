import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // Check login on page load
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      setUser({ name: "User" });
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("isLoggedIn", "true");
    setUser(userData || { name: "User" });
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
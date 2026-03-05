import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("isLoggedIn") ? { name: "User" } : null
  );

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

/* ✅ THIS WAS MISSING */
export function useAuth() {
  return useContext(AuthContext);
}
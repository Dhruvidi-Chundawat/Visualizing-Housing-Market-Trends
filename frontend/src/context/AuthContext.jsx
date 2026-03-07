import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
      .then(data => {
        if (data) setUser(data);
        setLoading(false);
      });
  }, []);

  const login = async (username, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.error };
    }

    setUser(data.user);
    return { success: true };
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { credentials: "include" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
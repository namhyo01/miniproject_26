import React, { createContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginHandler = (id) => {
    setUser(id);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user: user, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React, { createContext } from "react";
import { useState } from "react";

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();

  const SignIn = (email, senha) => {};

  const SignOut = (email, senha) => {};

  return (
    <LoginContext.Provider value={{ usuario, signed: true }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

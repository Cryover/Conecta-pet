import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/Login";
// import PerfilMedico from "./pages/PerfilMedico"
// import Despesas from "./pages/Despesas"
import LoginContext from "./contexts/LoginContext";

import "./App.css";

function App() {
  return (
    <LoginContext.Provider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="perfilMedico" element={<Dashboard />}></Route>
        <Route path="despesas" element={<Dashboard />}></Route>
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;

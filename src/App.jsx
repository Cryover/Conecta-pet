import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import PerfilMedico from "./pages/PerfilMedico"
// import Despesas from "./pages/Despesas"

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="perfilMedico" element={<Dashboard />}></Route>
      <Route path="despesas" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;

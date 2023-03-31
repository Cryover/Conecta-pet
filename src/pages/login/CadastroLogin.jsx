import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  const HandleCadastro = (e) => {
    e.preventDefault();

    setEmail(e.target.email.value);
    setSenha(e.target.password.value);

    if (0) {
      alert("Conta cadastrada com sucesso!");
      navigate("/dashboard");
    } else {
      alert("Email já cadastradado, favor utilizar outro email!");
    }
  };

  return (
    <div>
      <form onSubmit={HandleCadastro}>
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CadastroLogin;

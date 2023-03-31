import React from "react";
import { Link } from "react-router-dom";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const HandleLogin = () => {
  if (1) {
    alert("Email e senha corretos");
  } else {
    alert("Email ou senha incorretos");
  }
};

function Login() {
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Senha" />
        <input type="submit" onClick={HandleLogin} value="Submit" />
      </form>
    </div>
  );
}

export default Login;

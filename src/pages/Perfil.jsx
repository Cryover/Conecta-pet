import React from "react";
import { Link } from "react-router-dom";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import NavbarBottom from "../components/Header";

function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/perfilMedico">
            <MedicalInformationIcon />
            <p>Perfil Médico</p>
          </Link>
        </li>
        <li>
          <Link to="/calendario">
            <CalendarMonth />
            <p>Calendário</p>
          </Link>
        </li>
        <li>
          <Link to="/despesas">
            <RequestQuoteIcon />
            <p>Despesas</p>
          </Link>
        </li>
      </ul>
      <footer>
        <NavbarBottom />
      </footer>
    </div>
  );
}

export default Dashboard;

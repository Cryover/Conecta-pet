import React from "react";
import { Link } from "react-router-dom";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import NavbarBottom from "../components/NavbarBottom";
import Header from "../components/Header";
import { Ul, Li } from "../style/Dashboard";

function Dashboard() {
  return (
    <div>
      <header> teste</header>
      <div>
        <Ul>
          <Li>
            <Link
              to="/perfilMedico"
              style={{ width: "100%", textAlign: "center" }}
            >
              <MedicalInformationIcon />
              <p>Perfil Médico</p>
            </Link>
          </Li>
          <Li>
            <Link
              to="/calendario"
              style={{ width: "100%", textAlign: "center" }}
            >
              <CalendarMonth />
              <p>Calendário</p>
            </Link>
          </Li>
          <Li>
            <Link to="/despesas" style={{ width: "100%", textAlign: "center" }}>
              <RequestQuoteIcon />
              <p>Despesas</p>
            </Link>
          </Li>
        </Ul>
      </div>
      <footer>
        <NavbarBottom />
      </footer>
    </div>
  );
}

export default Dashboard;

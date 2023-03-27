import React from "react";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Nav, Ul, Li } from "../style/NavbarBottom";

function NavbarBottom() {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/perfilMedico">
            <MedicalInformationIcon sx={{ width: "40px", height: "40px" }} />
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <DashboardIcon sx={{ width: "40px", height: "40px" }} />
          </Link>
        </Li>
        <Li>
          <Link to="/despesas">
            <PetsIcon sx={{ width: "40px", height: "40px" }} />
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
}

export default NavbarBottom;

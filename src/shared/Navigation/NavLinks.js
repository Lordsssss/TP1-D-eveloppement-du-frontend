import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/listeProf">Professeurs</NavLink>
      </li>
      <li>
        <NavLink to="/listeCours">Liste de cours</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;

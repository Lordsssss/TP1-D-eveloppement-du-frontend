import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./styles/prof.css";

function prof({ prof }) {
  return (
    <Card className="prof-item__content">
      <Link
        to={`/listeCours/CoursProf/${prof.id}`}
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <div className="prof-item__image">
          <Avatar image={prof.photo} alt={prof.nom} />
        </div>
        <div className="prof-item__info">
          <h2>{prof.nom}</h2>
          <h3>
            {"Date d'embauche : "}
            {prof.dateEmb}
          </h3>
          <h3>Cours : {prof.listCoursId}</h3>
        </div>
      </Link>
    </Card>
  );
}

export default prof;

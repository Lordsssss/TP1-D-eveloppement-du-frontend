import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailCours from "./DetailCours";
import Card from "../shared/Card";

import "./styles/Cours.css";

function Cours({ cours }) {
  return (
    <Card className="cours-item__content">
      <Link
        to={`/listeCours/${cours.id}`}
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <div className="cours-item__info">
          <h2 className="cours-item__texte">
            {cours.id}
            {" - "}
            {cours.titre}
          </h2>
          <h3 className="cours-item__texte">{cours.nomProf}</h3>
          <h3 className="cours-item__texte">
            {"Nombre d'élève : "}
            {cours.etudiantIns.length}
          </h3>
          <h4 className="cours-item__texte">
            {cours.dateDebut}
            {" - "}
            {cours.dateFin}
            {" ("}
            {cours.session}
            {")"}
          </h4>
        </div>
      </Link>
    </Card>
  );
}

export default Cours;

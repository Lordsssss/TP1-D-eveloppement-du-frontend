import React from "react";
import { useParams } from "react-router-dom";
import Formulaire from "../formulaire/FormulaireEtudiant";

import "./styles/DetailCours.css";

function DetailCours({ DataCours, onChangeCours }) {
  const idCours = useParams().idCours;
  let cours = DataCours.find((obj) => obj.id === idCours);
  return (
    <div className="detail-cours__content">
      <Formulaire
        coursId={idCours}
        DataCours={DataCours}
        onChangeCours={onChangeCours}
      />
      {console.log(cours)}
      <h2>
        {cours.id}
        {" - "}
        {cours.titre}
      </h2>
      <h3>{cours.nomProf}</h3>
      <h3>
        {cours.dateDebut}
        {" - "}
        {cours.dateFin}
        {" ("}
        {cours.session}
        {")"}
      </h3>
      <div className="detail_cours__etudiant">
        {cours.etudiantIns.map((etudiant) => (
          <li>
            {etudiant.nom} - {etudiant.numAd}
          </li>
        ))}
      </div>
    </div>
  );
}
export default DetailCours;

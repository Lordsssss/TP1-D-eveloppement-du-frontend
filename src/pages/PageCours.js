import React from "react";
import ListCours from "../cours/ListCours";
import Formulaire from "../formulaire/FormulaireCours";
import { useParams } from "react-router-dom";

function PageCours({ DataProf, DataCours, onChangeProf, onChangeCours }) {
  let coursChargees = DataCours;
  const idProf = useParams().idProf;
  if (idProf !== undefined) {
    coursChargees = DataCours.filter((cours) => cours.idProf === idProf);
  }
  return (
    <div>
      <Formulaire
        DataProf={DataProf}
        onChangeProf={onChangeProf}
        DataCours={coursChargees}
        onChangeCours={onChangeCours}
      />
      <ListCours DataCours={coursChargees} />
    </div>
  );
}

export default PageCours;

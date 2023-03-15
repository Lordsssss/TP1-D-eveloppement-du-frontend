import React from "react";
import ListProf from "../utilisateur/prof/listProf.js";
import Formulaire from "../formulaire/FormulaireProf";

function PageProf({ DataProf, DataCours, onChangeProf, onChangeCours }) {
  return (
    <div>
      <Formulaire
        DataProf={DataProf}
        onChangeProf={onChangeProf}
        DataCours={DataCours}
        onChangeCours={onChangeCours}
      />
      <ListProf DataProf={DataProf} />
    </div>
  );
}

export default PageProf;

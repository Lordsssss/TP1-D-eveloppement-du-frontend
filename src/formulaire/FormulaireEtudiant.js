import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Formulaire.css";

function Formulaire({ coursId, DataCours, onChangeCours }) {
  const dataCoursCopy = [...DataCours];

  const [nomEtudiant, setNomEtudiant] = useState("");
  function nomEtudiantHandler(event) {
    setNomEtudiant(event.target.value);
  }

  const [numAd, setNumAd] = useState("");
  function numAdHandler(event) {
    setNumAd(event.target.value);
  }

  function AjouterEtudiant(event) {
    event.preventDefault();
    let cours = DataCours.find((obj) => obj.id === coursId);
    if (!cours.etudiantIns.includes(nomEtudiant)) {
      if (cours.etudiantIns.length < cours.nbMaxEtudiant) {
        let indexCours = DataCours.findIndex((obj) => obj.id === coursId);
        const etudiant = {
          nom: nomEtudiant,
          numAd: numAd,
        };
        cours.etudiantIns.push(etudiant);
        dataCoursCopy[indexCours] = cours;
        onChangeCours(dataCoursCopy);
      } else {
        alert("La limite d'étudiant a été atteinte");
      }
    } else {
      alert("L'étudiant existe Déja.");
    }
  }

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="form-container">
      <button className="button" onClick={handleButtonClick}>
        {showForm ? "X" : "Ajouter étudiant"}
      </button>
      {showForm && (
        <form className="form">
          <label className="titre">Ajouter un étudiant</label>
          <label>
            Nom de l'étudiant :
            <input
              type="text"
              value={nomEtudiant}
              onChange={nomEtudiantHandler}
            />
          </label>
          <label>
            Numéro d’admission :
            <input type="text" value={numAd} onChange={numAdHandler} />
          </label>
          <button type="submit" onClick={AjouterEtudiant}>
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
}

export default Formulaire;

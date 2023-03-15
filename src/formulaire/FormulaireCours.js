import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Formulaire.css";

function Formulaire({ DataProf, onChangeProf, DataCours, onChangeCours }) {
  let id = undefined;
  console.log(DataProf);
  const dataProfCopy = [...DataProf];
  const dataCoursCopy = [...DataCours];
  const [nomCours, setNomCours] = useState("");
  function nomCoursHandler(event) {
    setNomCours(event.target.value);
  }
  const [discipline, setDiscipline] = useState("");
  function disciplineHandler(event) {
    setDiscipline(event.target.value);
  }
  const [nomProf, setNomProf] = useState("");
  function nomProfHandler(event) {
    setNomProf(event.target.value);
  }
  const [nbMaxEtudiant, setNbMaxEtudiant] = useState("");
  function nbMaxEtudiantHandler(event) {
    setNbMaxEtudiant(event.target.value);
  }
  const randomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  function formatDate(date) {
    const year = date.getYear() + 1900;
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    return String(year + "/" + month + "/" + day);
  }

  function SiProfExiste(nomProf) {
    let profTrouver = DataProf.find((obj) => obj.nom === nomProf);
    if (!profTrouver) {
      const nouveauProf = {
        id: (id = randomId()),
        nom: nomProf,
        //dateEmb: JSON.stringify(new Date()),
        dateEmb: formatDate(new Date()),
        photo: "https://picsum.photos/200/300?random=1",
        listCoursId: [nomCours],
      };
      profTrouver = nouveauProf;
      dataProfCopy.push(nouveauProf);
      onChangeProf(dataProfCopy);
    }
    profTrouver.listCoursId.push(nomCours);
    id = profTrouver.id;
    return nomProf;
  }

  function AjouterCours(event) {
    event.preventDefault();
    const nouveauCours = {
      id: randomId(),
      titre: nomCours,
      discipline: discipline,
      nbMaxEtudiant: nbMaxEtudiant,
      dateDebut: formatDate(dateDebut),
      dateFin: formatDate(dateFin),
      nomProf: SiProfExiste(nomProf),
      idProf: id,
      session: "hiver 2023",
      etudiantIns: [""],
    };
    dataCoursCopy.push(nouveauCours);
    console.log("AAAAAAAAAAAAAAAAAAAAAAARHG");
    onChangeCours(dataCoursCopy);
  }

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());

  return (
    <div className="form-container">
      <button className="button" onClick={handleButtonClick}>
        {showForm ? "X" : "Ajouter Cours"}
      </button>
      {showForm && (
        <form className="form">
          <label className="titre">Ajouter un cours</label>
          <label className="inputText">
            Nom du cours :
            <input type="text" value={nomCours} onChange={nomCoursHandler} />
          </label>
          <label className="inputText">
            discipline :
            <input
              type="text"
              value={discipline}
              onChange={disciplineHandler}
            />
          </label>
          <label>
            Nom du proffesseur :
            <input type="text" value={nomProf} onChange={nomProfHandler} />
          </label>
          <label>
            Nombre d'étudiant maximum :
            <input
              type="text"
              value={nbMaxEtudiant}
              onChange={nbMaxEtudiantHandler}
            />
          </label>
          <label>
            Date du cours :
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={dateDebut}
              onChange={(date) => setDateDebut(date)}
              excludeDateIntervals={[
                { start: new Date("2023-06-06"), end: new Date("2023-12-31") },
              ]}
            />
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={dateFin}
              onChange={(date) => setDateFin(date)}
              excludeDateIntervals={[
                { start: new Date("2023-06-06"), end: new Date("2023-12-31") },
              ]}
            />
          </label>
          <button type="submit" onClick={AjouterCours}>
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
}

export default Formulaire;

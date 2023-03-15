import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Formulaire.css";

function Formulaire({ DataProf, onChangeProf }) {
  const dataProfCopy = [...DataProf];

  const [nomProf, setNomProf] = useState("");
  function nomProfHandler(event) {
    setNomProf(event.target.value);
  }
  const [lienPhoto, setLienPhoto] = useState("");
  function lienPhotoHandler(event) {
    setLienPhoto(event.target.value);
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

  function AjouterProf(event) {
    event.preventDefault();
    const nouveauProf = {
      id: randomId(),
      nom: nomProf,
      dateEmb: formatDate(dateEmbauche),
      listCoursId: [""],
    };
    dataProfCopy.push(nouveauProf);
    onChangeProf(dataProfCopy);
    console.log(DataProf);
  }

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const [dateEmbauche, setDateEmbauche] = useState(new Date());

  return (
    <div className="form-container">
      <button className="button" onClick={handleButtonClick}>
        {showForm ? "X" : "Ajouter Proffesseur"}
      </button>
      {showForm && (
        <form className="form">
          <label className="titre">Ajouter un proffesseur</label>
          <label>
            Nom du proffesseur :
            <input type="text" value={nomProf} onChange={nomProfHandler} />
          </label>
          <label>
            Lien Photo :
            <input type="text" value={lienPhoto} onChange={lienPhotoHandler} />
          </label>
          <label>
            Date d'embauche :
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={dateEmbauche}
              onChange={(date) => setDateEmbauche(date)}
              excludeDateIntervals={[
                { start: new Date("2023-06-06"), end: new Date("2023-12-31") },
              ]}
            />
          </label>
          <button type="submit" onClick={AjouterProf}>
            Ajouter
          </button>
        </form>
      )}
    </div>
  );
}

export default Formulaire;

import React from "react";
import "./styles/listCours.css";
import Cours from "./Cours";
import Card from "../shared/Card";

function listCours({ DataCours }) {
  if (DataCours.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun Cours</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="prof-list">
      {DataCours.map((cours) => (
        <Cours key={cours.id} cours={cours} />
      ))}
      {console.log("teste")}
    </ul>
  );
}

export default listCours;

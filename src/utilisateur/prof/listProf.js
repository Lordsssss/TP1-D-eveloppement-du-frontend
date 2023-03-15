import React from "react";
import "./styles/listProf.css";
import Prof from "./prof";
import Card from "../../shared/Card";

function listProf({ DataProf }) {
  const myArray = Array.from(DataProf || []);
  if (myArray.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun utilisateur</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="profs-list">
      {myArray.map((prof) => (
        <Prof key={prof.id} prof={prof} />
      ))}
    </ul>
  );
}

export default listProf;

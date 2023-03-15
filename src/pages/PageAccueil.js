import React from "react";

import "./styles/PageAccueil.css";
function PageAccueil() {
  return (
    <div className="page_accueil__content">
      <img
        className="page_accueil__img"
        src="https://tvcdn.fancaps.net/5641999.jpg"
        alt="Ecole WaySide"
      />
      <p className="page_accueil__paragraphe">
        Wayside est une série télévisée d'animation canadienne d'après le roman
        Sideways Stories of Wayside School de Louis Sachar, John Derevlany,
        coproduite par Nelvana1 et diffusée entre le 16 mars 2007 et le 15
        janvier 2008 sur Teletoon et aux États-Unis depuis le 25 juin 2007 sur
        Nickelodeon. Au Québec, la série a été diffusée à partir du 17 mars 2007
        sur Télétoon. En France, le téléfilm pilote a été diffusé sur Télétoon,
        tandis la série a été diffusée sur Nickelodeon France, KidsCo et
        Netflix.
      </p>
    </div>
  );
}

export default PageAccueil;

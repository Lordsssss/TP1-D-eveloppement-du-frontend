import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import PageProf from "./pages/PageProf";
import PageCours from "./pages/PageCours";
import DataProf from "./data/prof.json";
import DataCours from "./data/cours.json";
import DetailCours from "./cours/DetailCours";
import PageAccueil from "./pages/PageAccueil";

function App() {
  const [listeProf, setListeProf] = useState(DataProf);
  const [listeCours, setListeCours] = useState(DataCours);
  return (
    <div className="app">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/listeProf" exact>
              <PageProf
                DataProf={listeProf}
                DataCours={listeCours}
                onChangeProf={setListeProf}
                onChangeCours={setListeCours}
              />
            </Route>
            <Route
              path={["/listeCours", "/listeCours/CoursProf/:idProf"]}
              exact
            >
              <PageCours
                DataProf={listeProf}
                DataCours={listeCours}
                onChangeProf={setListeProf}
                onChangeCours={setListeCours}
              />
            </Route>
            <Route path="/listeCours/:idCours" exact>
              <DetailCours
                DataCours={listeCours}
                onChangeCours={setListeCours}
              />
            </Route>
            <Route path="/">
              <PageAccueil />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

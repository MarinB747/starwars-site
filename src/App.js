import React from "react";
import "./App.css";
import PeopleTable from "./pages/People";
import PlanetTable from "./pages/Planets";
import ShipsTable from "./pages/Starships";
import Navigation from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PeopleTable} />
          <Route path="/planets" exact component={PlanetTable} />
          <Route path="/ships" exact component={ShipsTable} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

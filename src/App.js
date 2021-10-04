import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import TeamPage from './TeamPage';
import Bracket from './Bracket';
import NavBar from "./NavBar";

function App() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/bracket">
          <Bracket/>
          </Route>
          <Route exact path="/teams">
            <TeamPage/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>       
      </div>
    );
}

export default App;

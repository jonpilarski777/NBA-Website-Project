import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import TeamPage from './TeamPage';
import BestTeam from './BestTeam';
import NavBar from "./NavBar";
import HallOfFame from './HallOfFame';

import './Teams.css'

function App() {
    return (
      <div className="team-page">
        <NavBar/>
        <Switch>
          <Route exact path ="/HofVoting"> 
            <HallOfFame/>
          </Route>
          <Route exact path="/BestTeam">
          <BestTeam/>
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

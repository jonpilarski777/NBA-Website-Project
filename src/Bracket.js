import React from 'react';
import './Bracket.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Bracket() {
    return (
       <div>
           <h1>Best Teams of All-Time Bracket</h1>
           <button>Randomizer placeholder</button>
           <div id = "bracket-container">
                <img src = "https://www.interbasket.net/wp-content/uploads/NBA-playoffs-bracket-768x471.jpg" alt ="NBA Bracket"/>

           </div>
          
           {/*Displays a 16 team bracket with the teams rendered in (probably need another component here)*/}
       </div>
    );
}

export default Bracket;



//Way I'm thinking about this is we assign each of the 16 slots on the bracket an id - and then we assign each team name ("year" + " team" properties so like 1996 Bulls) & its logo if possible then you can click on the team to bring up regular season record, postseason record and finish 
import React, {useEffect, useState} from 'react';
import './bestTeam.css'

function BestTeam() {
const[teams, SetTeams] = useState([])
// const[]

useEffect(()=>{
    fetch("http://localhost:4000/bestTeam")
    .then(r=>r.json())
    .then(teamObj =>SetTeams(teamObj))
},[]) 


// function handleClick(){




// }

    return (
         <div className = "container">
            <h1 style = {{color: "gold"}}> Best NBA Teams Ever </h1>
             <table>
                <thead>
                     <tr style = {{fontSize: "22px"}}>
                        <th>Year</th>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>%</th>
                        <th>Playoff W/L</th>
                        <th>Finish</th>
                     </tr>
                </thead>
                <tbody style = {{textAlign:"center"}}>
                    {
                        teams.map((teamObj) => (
                            <tr key = {teamObj.id}>
                                    <td> {teamObj.year}</td>
                                    <td> {teamObj.team}</td>
                                    <td> {teamObj.wins}</td>
                                    <td> {teamObj.losses}</td>
                                    <td> {(teamObj.wins/((teamObj.wins)+(teamObj.losses))).toFixed(2) +"%"}</td>
                                    <td> {teamObj.postseasonRecord}</td>
                                    <td> {teamObj.finish}</td>   
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>   
    );
}

export default BestTeam

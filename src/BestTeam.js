import React, {useEffect, useState} from 'react';
import './bestTeam.css'

function BestTeam() {
const[teams, SetTeams] = useState([])

useEffect(()=>{
    fetch("http://localhost:4000/bestTeam")
    .then(r=>r.json())
    .then(teamObj =>SetTeams(teamObj))
},[]) 



    return (
         <div className = "container">
            <h1> Best NBA Teams Ever </h1>
             <table>
                <thead>
                     <tr>
                        <th>Year</th>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Postseason Record</th>
                        <th>Finish</th>
                     </tr>
                </thead>
                <tbody>
                    {
                        teams.map((teamObj) => (
                            <tr key = {teamObj.id}>
                                    <td> {teamObj.year}</td>
                                    <td> {teamObj.team}</td>
                                    <td> {teamObj.wins}</td>
                                    <td> {teamObj.losses}</td>
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

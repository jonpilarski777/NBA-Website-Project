import React, {useEffect, useState} from 'react';
import './bestTeam.css'

function BestTeam() {
const[historicalTeams, SetHistoricalTeams] = useState([])
const[topMatchup, SetTopMatchup] = useState({})
const[BottomMatchup, SetBottomMatchup] = useState({})

useEffect(()=>{
    fetch("http://localhost:4000/bestTeam")
    .then(r=>r.json())
    .then(teamObj =>SetHistoricalTeams(teamObj))
},[]) 

function handleClick(){
    console.log("success")
}
    return (
         <div className = "container">
            <h1 style = {{color: "gold"}}> Best NBA Teams Ever </h1>
             <table>
                <thead>
                     <tr style = {{fontSize: "22px"}}>
                        <th> </th>
                        <th>Year</th>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>%</th>
                        <th>Playoffs</th>
                        <th>Finish</th>
                     </tr>
                </thead>
                <tbody style = {{textAlign:"center"}}>
                    {
                        historicalTeams.map((teamObj) => (
                            <tr className="best-team-list" key = {teamObj.id} onClick = {handleClick}>
                                    <td className="team-logo-td"> 
                                        <img className="best-team-logo" src={teamObj.logo} width = "40" height ="40"/></td>
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

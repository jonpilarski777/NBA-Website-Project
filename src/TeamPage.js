import React, {useEffect, useState} from 'react';
import TeamCard from './TeamCard';

function TeamPage() {

    const [teams, SetTeams]=useState([])
    const [teamInfo, SetTeamInfo]= useState([])


    useEffect(()=>{
        fetch("http://localhost:4000/teams")
        .then(r=>r.json())
        .then(team=>SetTeams(team))
    },[])
    

    const displayTeamCards = teams.map((team) => <TeamCard key={team.id} team={team} SetTeamInfo={SetTeamInfo}/>)

    return (
       <>
        <h1>Teams</h1>
        <div style ={{margin:'auto', width: '800px', height: '400px', padding:"20px"}}>
            {displayTeamCards}
        </div>
        <div>
            <h2>{teamInfo.length===0 ? null : teamInfo.name}</h2>
            <p>{teamInfo.length===0 ? null : teamInfo.city}</p>
            <p>Championship Years: {teamInfo.length===0 ? null : teamInfo.champYears}</p>
        </div>
       </>
    );
}

export default TeamPage
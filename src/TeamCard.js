import React from 'react';

function TeamCard({team, SetTeamInfo}) {
    return (
        <img className="logos" onClick={()=>SetTeamInfo(team)} style={{maxHeight:'100px',maxWidth:'100px'}}src={team.logo} alt={team.name}></img>
    );
}

export default TeamCard;

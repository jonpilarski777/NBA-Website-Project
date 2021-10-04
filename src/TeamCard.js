import React from 'react';
import './TeamCard.css'

function TeamCard({team, SetTeamInfo}) {
    return (
        <div className="logoCard">
            <img className="logos" onClick={()=>SetTeamInfo(team)} src={team.logo} alt={team.name}></img>
        </div>
    );
}

export default TeamCard;

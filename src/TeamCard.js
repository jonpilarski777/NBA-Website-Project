import React from 'react';
import './Teams.css'

function TeamCard({team, SetTeamInfo, SetShowMoreYears, SetShowModal}) {

    function handleClick(){
        SetTeamInfo(team)
        SetShowMoreYears(false)
        SetShowModal(true)
    }

    const imageID = "logo-" + team.id
    return (
        <div className="logoCard">
            <img id={imageID} className="logos" onClick={handleClick} src={team.logo} alt={team.name}></img>
        </div>
    );
}

export default TeamCard;

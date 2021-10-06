import React, {useEffect, useState} from 'react';
import TeamCard from './TeamCard';
import TeamDetailModal from './TeamDetailModal';
import './Teams.css'
import map from "./map.png"

function TeamPage() {

    const [teams, SetTeams]=useState([])
    const [teamInfo, SetTeamInfo]= useState([])
    const [showMoreYears, SetShowMoreYears] = useState(false)
    const [showModal, SetShowModal] = useState(false)


    useEffect(()=>{
        fetch("http://localhost:4000/teams")
        .then(r=>r.json())
        .then(team=>SetTeams(team))
    },[])
    

    const displayTeamCards = teams.map((team) => <TeamCard  SetShowModal = {SetShowModal} key={team.id} team={team} SetTeamInfo={SetTeamInfo} SetShowMoreYears={SetShowMoreYears}/>)

    return (
       <div>
        <div id="teams-map-container">
            <img src={map} alt="US Map"/>
            {displayTeamCards}
        </div>
        {/* Do not render if team has not been clicked yet */}
        {showModal ? <TeamDetailModal showModal={showModal} SetShowModal={SetShowModal} showMoreYears={showMoreYears} teamInfo={teamInfo}/>: null}
       </div>
    );
}

export default TeamPage
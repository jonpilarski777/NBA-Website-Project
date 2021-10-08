import React, {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard'

function HallOfFame() {
    const [player, SetPlayer] = useState([])
    const [votes, SetVotes] = useState(17)
    useEffect(()=> {
        fetch("http://localhost:4000/players")
        .then(r=> r.json())
        .then(data => SetPlayer(data))
    },[])

    function handlePlayerVotes(votedPlayer){
        const updatedPlayerVotes = player.map((playerObj) =>
            playerObj.id === votedPlayer.id ? votedPlayer : playerObj);
        SetPlayer(updatedPlayerVotes)
    }
    function handleVotes(id, playerVotes){
        // const updateVotes = {votes: playerVotes + 1}
        fetch(`http://localhost:4000/players/${id}`,
                 {method: "PATCH", headers:{
                     "Content-type": "application/json"},
                     body: JSON.stringify({votes: playerVotes +1
                         })})
                 .then (r=>r.json())
                 .then((handlePlayerVotes))
         }
    
    let totalVotes = 0;
    player.map(data=>totalVotes = totalVotes + data.votes)
    const playerList = player.map(info => <PlayerCard key={info.id} SetVotes = {SetVotes} handleVotes = {handleVotes} totalVotes={totalVotes} {...info}/>)
    
    return (
        <div style={{margin: "34px 40px", width: "1600px", height:"820px", backgroundColor:"white", padding:"1px 10px"}}>
            <h2 style={{textAlign:"center"}}>Hall of Fame</h2>
            {playerList}
        </div>
    )
}

export default HallOfFame

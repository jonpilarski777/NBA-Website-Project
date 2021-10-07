import React, {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard'

//POST tied to yes/no on hall of fame player 
function HallOfFame() {

    const [player, SetPlayer] = useState([])

    useEffect(()=> {
        fetch("http://localhost:4000/players")
        .then(r=> r.json())
        .then(data => SetPlayer(data))
    },[])
    let totalVotes = 0;
    player.map(data=>totalVotes = totalVotes + data.votes)
    const playerList = player.map(info => <PlayerCard key={info.id} totalVotes={totalVotes} {...info}/>)
    return (
        <div style={{margin: "34px 40px", width: "800px", height:"820px", backgroundColor:"white", padding:"1px 10px"}}>
            <h2 style={{textAlign:"center"}}>Hall of Fame</h2>
            {playerList}
        </div>
    )
}

export default HallOfFame

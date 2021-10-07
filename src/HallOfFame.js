import React, {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard'
import Option from './Option'

// Create a form w/ drop down of names
// Once form is submitted, store the name
// Retreieve the id somehow (maybe look through playerList)
// If name === stored form info, then get the id

//Patch tied to yes/no on hall of fame player 
function HallOfFame() {

    const [player, SetPlayer] = useState([])
    const [votes, SetVotes] = useState(17)

    useEffect(()=> {
        fetch("http://localhost:4000/players")
        .then(r=> r.json())
        .then(data => SetPlayer(data))
    },[])

    function handleSubmit (event){
        event.preventDefault()
            // fetch(`http://localhost:4000/players/${id}`,
            //     {method: "PATCH", headers:{
            //         "Content-type": "application/json"},
            //         body: JSON.stringify({
            //             votes: e.target.value
            //         })})
            // .then (r=>r.json())
            // .then((data)=>console.log(data))     
            console.log(event)       
    }
    let totalVotes = 0;
    player.map(data=>totalVotes = totalVotes + data.votes)
    const playerList = player.map(info => <PlayerCard key={info.id} totalVotes={totalVotes} {...info}/>)
    
    return (
        <div style={{margin: "34px 40px", width: "800px", height:"820px", backgroundColor:"white", padding:"1px 10px"}}>
            <h2 style={{textAlign:"center"}}>Hall of Fame</h2>
            <form onSubmit = {handleSubmit}>
                <label for="players">Vote for a player:</label>
                <select id="players"  name="players">
                    {player.map((info)=> <Option SetVotes={SetVotes} key={info.name} {...info}/>)}
                 </select>
                 <button>Submit</button>
            </form>

            {playerList}
        </div>
    )
}

export default HallOfFame

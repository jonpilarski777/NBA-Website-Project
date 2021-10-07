import React, {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard'

//Patch tied to yes/no on hall of fame player 
function HallOfFame() {

    const [player, SetPlayer] = useState([])
    const [hofer, setHofer] = useState({})

    useEffect(()=> {
        fetch("http://localhost:4000/players")
        .then(r=> r.json())
        .then(data => SetPlayer(data))
    },[])

    function handleChange(e){
        setHofer({...hofer, [e.target.name]: e.target.value})   
    }

    function handleSubmit (id,e){
            fetch(`http://localhost:4000/players/${id}`,
                {method: "PATCH", headers:{
                    "Content-type": "application/json"},
                    body: JSON.stringify({
                        votes: e.target.value
                    })})
            .then (r=>r.json())
            .then((data)=>console.log(data))            
    }
    let totalVotes = 0;
    player.map(data=>totalVotes = totalVotes + data.votes)
    const playerList = player.map(info => <PlayerCard key={info.id} totalVotes={totalVotes} {...info}/>)
    
    return (
        <div style={{margin: "34px 40px", width: "800px", height:"820px", backgroundColor:"white", padding:"1px 10px"}}>
            <h2 style={{textAlign:"center"}}>Hall of Fame</h2>
            <form onSubmit = {handleSubmit}>
                <label for="players">Vote for a player:</label>
                <select id="players"  name="players" onChange = {handleChange}>
                    <option value = {hofer.votes}>Klay Thompson</option>
                    {/* <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option> */}
                 </select>
                 <input type="submit"> </input>?
            </form>

            {playerList}
        </div>
    )
}

export default HallOfFame

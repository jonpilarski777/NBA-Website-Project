import React, {useEffect, useState} from 'react';



function BestTeam() {
const[winner, setWinner] = useState(null)
const [loser, setLoser] = useState(null)

//spread winner and then add on selected/new winner on each this/that selection; dont need to persist - just show who wins the current bracket


useEffect(()=>{
    fetch("http://localhost:4000/bracket")
    .then(r=>r.json())
    .then(matchup =>console.log(matchup))
},[]) 

    return (
        <>
         <div>
            

        </div>   
         <div>



         </div>





        </>
    )
}



export default BestTeam

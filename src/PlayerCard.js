import React, {useState} from 'react';

function PlayerCard({name, votes, color, id, totalVotes, handleVotes, SetVotes}) {
    const widthAmount = ((votes/totalVotes) * 3000)
    const [style, SetStyle] = useState({
            backgroundColor: "white",
            height: "35px",
            border: "1px solid black",
            margin:" 15px 10px",
            padding: "2px",
            width: "1500px",
    })
    const voteContainer = {
        backgroundImage: `${color}`,
        height:"25px",
        margin: "-9px 10px 0px 10px",
        width: `${widthAmount.toString()}px`,
        paddingLeft: "20px",
        color: "white",
    }
    function handleClick(){
        handleVotes(id,votes)
        SetVotes(votes)
    }
    return (
       <>
      <button onClick ={handleClick} style = {{float:"right", marginRight:"125px", marginTop: "10px"}}> Vote </button>
      <div style={style}>
           <div style={voteContainer}>
             <p >{name} - {votes}/{totalVotes} Votes</p>
           </div> 
       </div>
       </>
    );
}

export default PlayerCard;

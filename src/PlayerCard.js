import React from 'react';

function PlayerCard({name, votes, color, id, totalVotes, handleVotes}) {
    const widthAmount = (votes/totalVotes)*100;
    const style = {
            backgroundColor: "white",
            height: "35px",
            border: "1px solid black",
            margin:" 15px 10px",
            padding: "2px",
            width: "1500px",
            borderRadius: "10px"
    }

    const voteContainer = {
        backgroundImage: `${color}`,
        height:"25px",
        margin: "5px 10px 10px 300px",
        width: `${votes*10}px`,
        paddingLeft: "20px",
        color: "black",
    }
    
    return (
       <>
      <button onClick ={()=>handleVotes(id,votes)} style={{float:"right", marginRight:"105px", marginTop: "10px"}}> Vote </button>
      <div style={style}>
           <p style={{float:"left", margin:"7px 0 0 6px"}}>{name} - {widthAmount.toFixed(1)}% of Total Votes</p>
           <div style={voteContainer}>
           </div> 
       </div>
       <p style={{float:"left", marginTop: "-46px", marginLeft:`${(votes*10)+342}px`}}>({votes})</p>
       </>
    );
}

export default PlayerCard;

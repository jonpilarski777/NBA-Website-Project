import React, {useState} from 'react';

function PlayerCard({name, votes, totalVotes}) {
    const widthAmount = ((votes/totalVotes) * 800)
    const [style, SetStyle] = useState({
            backgroundColor: "white",
            height: "40px",
            border: "1px solid black",
            margin:" 15px 10px",
            padding: "3px",
            width: "600px",
    })

    const voteContainer = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height:"25px",
        margin: "-9px 10px 0px 10px",
    }

    return (
       <div style={style}>
           <div style={voteContainer}>
             <p>Name:{name} - {votes}/{totalVotes} Votes</p>
           </div> 
       </div>
    );
}

export default PlayerCard;

import React, {useState} from 'react';

function PlayerCard({name, votes,color, totalVotes}) {
    const widthAmount = ((votes/totalVotes) * 5000)
    const [style, SetStyle] = useState({
            backgroundColor: "white",
            height: "35px",
            border: "1px solid black",
            margin:" 15px 10px",
            padding: "2px",
            width: "600px",
    })

    const voteContainer = {
        backgroundImage: `${color}`,
        height:"25px",
        margin: "-9px 10px 0px 10px",
        width: `${widthAmount.toString()}px`,
        paddingLeft: "5px"
    }

    return (
       <div style={style}>
           <div style={voteContainer}>
             <p>{name} - {votes}/{totalVotes} Votes</p>
           </div> 
       </div>
    );
}

export default PlayerCard;

import React, {useState} from 'react';
import "./TeamModal.css"

function TeamDetailModal({teamInfo, SetShowModal, showModal}) {
    
    const [showMoreYears, SetShowMoreYears] = useState(false)


    return (
       <div className={`modal ${showModal ? 'show' : ''}`}>
           <div className="modal-content">
               <div className="modal-header">
                    <h1 className="modal-title">{teamInfo.name}</h1>
                    <img className="modal-logo" alt="logo" src={teamInfo.logo}/>
               </div>
               <div className="modal-body">
                <p className="city-name">{teamInfo.city}</p>
                <p>Championship Years: </p>
                    {/* Show the first four years but creates a See More button when more than 4 years */}
                    {teamInfo.champs.map((year=><li key={year}>{year}</li>)).length > 4 ? 
                    <div>
                        {showMoreYears ? teamInfo.champs.map((year=><li key={year}>{year}</li>)) : teamInfo.champs.map((year=><li key={year}>{year}</li>)).slice(0,4)}
                        <button onClick={(()=>SetShowMoreYears(!showMoreYears))}>{showMoreYears ? "Close" : "See More..."}</button>
                    </div> : 
                    teamInfo.champs.map((year=><li key={year}>{year}</li>)).slice(0,4)}  
                </div>
               <div className="modal-footer">
                   <button  onClick={()=> SetShowModal(false)}>Close</button>
               </div>
           </div>
       </div>
    );
}

export default TeamDetailModal;

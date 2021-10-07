import React from 'react';

function Option({name, votes}) {
    return (
       <option value={votes}>{name}</option>
    );
}

export default Option;

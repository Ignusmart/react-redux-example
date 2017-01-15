import React, { PropTypes } from 'react';

const PlayerDetail = ({ player }) => {
  if( player ){
    return (
      <div>
        <h3>{ player.name }</h3>
        <ul>
          <li>
            <span>Score: </span> 
            { player.score }
          </li>
          <li>
            <span>Created: </span> 
            { player.created }
          </li>
          <li>
            <span>Updated: </span> 
            { player.updated }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};


export default PlayerDetail;

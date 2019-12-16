import React from 'react';

const PlayerCard = (props) => {
    
    return(
        <div className="player-card">
            <h1 className="name">Player: {props.player.name}</h1>
            <h2 className="country">From: {props.player.country}</h2>
            <h3 className="searches">Number of Searches: {props.player.searches}</h3>
            <h3 className="id">ID Number: {props.player.id}</h3>
        </div>
    )
}
export default PlayerCard;
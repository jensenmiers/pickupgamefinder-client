import React from 'react'
import GameItem from './GameItem'

function GameList({gamesArray, onDelete, onEditClick}) {

    const games = gamesArray.map(game => <GameItem key={game.id} {...game} onDelete={onDelete} onEditClick={onEditClick}/>)



    return(
        <div>
            <h2>Open Games</h2>
            {games}
        </div>
    )
}

export default GameList
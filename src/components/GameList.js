import React from 'react'
import GameItem from './GameItem'

function GameList({gamesArray, onDelete, onEditClick}) {

    const game = gamesArray.map(game => <GameItem key={game.id} game={game} onDelete={onDelete} onEditClick={onEditClick}/>)



    return(
        <div>
            <h2>Open Games</h2>
            {game}
        </div>
    )
}

export default GameList
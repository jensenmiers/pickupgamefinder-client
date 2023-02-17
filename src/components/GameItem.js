import React from 'react'

function GameItem ( {game,
    // id, game_start, game_end, capacity, gym_id, gym,
    onDelete, onEditClick} ) {

    const {id, game_start, game_end, capacity, gym_id, gym} = game

    function handleDelete(e) {
        onDelete(id)
    }

    function populateEditForm() {
        onEditClick(game)
    }

    return(
        <div>
            Game {id} <br/>
            Starts: {new Date(game_start).toGMTString()}
            <br/>
            Ends: {new Date(game_end).toGMTString()} <br/>
            Total Player Cap: {capacity} <br/>
            {/* Gym ID: {gym_id} <br/> */}
            Gym: {gym.gym_name} - ID {gym_id} <br/>

            <button onClick={handleDelete}>🗑</button>
            <button onClick={populateEditForm}>{`Update Game ${id} Details`}</button><br/>  <br/>
        </div>
    )
}
export default GameItem
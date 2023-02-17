import React from 'react'

function GameItem ( {id, game_start, game_end, capacity, gym_id, onDelete, gym, onEditClick} ) {

    function handleDelete(e) {
        onDelete(id)
    }

    function populateEditForm() {
        onEditClick()
        // onEditClick(game)

    }

    return(
        <div>
            Game ID: {id} <br/>
            Time & Date: {game_start} <br/>
            Game ends: {game_end} <br/>
            Total player cap: {capacity} <br/>
            Gym: {gym_id} <br/>
            {/* Gym: {gym.gym_name} <br/> */}

            <button onClick={handleDelete}>🗑</button>
            <button onClick={populateEditForm}>Update Game Details (does not work)</button><br/>  <br/>
        </div>
    )
}
export default GameItem
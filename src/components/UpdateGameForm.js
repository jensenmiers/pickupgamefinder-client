import React, {useState} from "react";


function UpdateGameForm({ onEditFormSubmit }) {

  const initialEditForm = {
    id: 23,
    game_start: '2023-02-18 08:00:00',
    game_end: '2023-02-18 10:00:00',
    capacity: 10,
    gym_id: 37
  }

  const [gameData, setGameData] = useState(initialEditForm)

  function handleChange(e) {
    setGameData({...gameData, [e.target.name]: e.target.value})
  }

  const handleUpdateSubmit = e => {
        e.preventDefault()
        onEditFormSubmit(gameData)

          // DID THIS IN GameContainer.js instead
          // fetch(`http://localhost:9292/games${gameData.id}`,{
          //     method: 'PATCH',
          //     body: JSON.stringify(gameData),
          //     headers: {'Content-Type': 'application/json'}
          //   })
          //   .then(response => response.json())
                // .then(data => {
                //   const updatedGames = gamesArray.map(game => game.id == data.id ? data : game)
                //   setGameData(updatedGames)
                // })
    }

    return(
    <div>
      <h3>Update a game</h3>
      <form onSubmit={handleUpdateSubmit}>
          <input
          value={gameData.id} onChange={handleChange}
          type="number"
          name="id"
          placeholder="Game ID" />
        <input
          value={gameData.game_start} onChange={handleChange}
          type="datetime-local"
          name="game_start"
          placeholder="Game Start" />
        <input
          value={gameData.game_end} onChange={handleChange}
          type="datetime-local"
          name="game_end"
          placeholder="Game End" />
        <input
          value={gameData.capacity} onChange={handleChange}
          type="number"
          name="capacity"
          placeholder="..." />
        <input
          value={gameData.gym_id} onChange={handleChange}
          name="gym_id"
          placeholder="Gym ID" />
        <button type="submit">Update Game</button>
      </form>
    </div>
    )
}

export default UpdateGameForm;
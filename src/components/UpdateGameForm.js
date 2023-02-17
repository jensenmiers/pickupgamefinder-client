import React, {useState} from "react";


function UpdateGameForm({ editGame, setEditGame, onEditFormSubmit }) {

  // const initialEditForm = {
  //   // populate with empty cells instead
  //   id: 23,
  //   game_start: '2023-02-18 08:00:00',
  //   game_end: '2023-02-18 10:00:00',
  //   capacity: 10,
  //   gym_id: 37
  // }
  const initialEditForm = {
    id: '',
    game_start: '',
    game_end: '',
    capacity: '',
    gym_id: ''
}

  // const [gameData, setGameData] = useState(initialEditForm)

  function handleChange(e) {
    setEditGame({...editGame, [e.target.name]: e.target.value})
    // setGameData({...gameData, [e.target.name]: e.target.value})
  }

  const handleUpdateSubmit = e => {
        e.preventDefault()
        // onEditFormSubmit(gameData)
        onEditFormSubmit(editGame)
        setEditGame(initialEditForm)


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
          <label>Game ID: </label>
          <input
          value={editGame.id} onChange={handleChange}
          type="number"
          name="id"
          placeholder="Game ID" />
        <label> Start: </label>
        <input
          value={editGame.game_start} onChange={handleChange}
          type="datetime-local"
          name="game_start"
          placeholder="Game Start" />
        <label> End: </label>
        <input
          value={editGame.game_end} onChange={handleChange}
          type="datetime-local"
          name="game_end"
          placeholder="Game End" />
        <br/>
        <label> Capacity: </label>
        <input
          value={editGame.capacity} onChange={handleChange}
          type="number"
          name="capacity"
          placeholder="..." />
        <label> Gym ID: </label>
        <input
          value={editGame.gym_id} onChange={handleChange}
          name="gym_id"
          placeholder="Gym ID" />
        <button type="submit">Update Game</button>
      </form>
    </div>
    )
}

export default UpdateGameForm;
import React, {useState} from "react";

const defaultInputs = {
    game_start: '',
    game_end: '',
    capacity: '',
    gym_id: ''

}

function NewGameForm({ onSubmitGame }) {

    const [formInputs, setFormInputs] = useState(defaultInputs)

    const handleChange = e => {
        setFormInputs({...formInputs, [e.target.name]: e.target.value})
    }

    const postGame = () => {
        const config = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formInputs,
          })
        }
        return fetch('http://localhost:9292/games', config)
            .then(response => response.json())
    }

    const handleSubmit = e => {
        e.preventDefault()
        postGame()
         .then(onSubmitGame)
        setFormInputs(defaultInputs)
      }

    const { game_start, game_end, capacity, gym_id } = formInputs


    return(
    <div>
      <h3>Post a new game</h3>
      <form onSubmit={handleSubmit}>
        <label> Start: </label>
        <input value={game_start} onChange={handleChange} type="datetime-local" name="game_start" placeholder="Game Start" />
        <label> End: </label>
        <input value={game_end} onChange={handleChange} type="datetime-local" name="game_end" placeholder="Game End" />
        <br/>
        <label> Capacity: </label>
        <input value={capacity} onChange={handleChange} type="number" name="capacity" placeholder="..." />
        <label> Gym ID: </label>
        <input value={gym_id} onChange={handleChange} type="number" name="gym_id" placeholder="An existing Gym ID" />
        <button type="submit">Add Game</button>
      </form>
    </div>
    )
}

export default NewGameForm;
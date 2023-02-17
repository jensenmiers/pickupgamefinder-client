import React, {useEffect, useState} from "react"
import GameList from './GameList'
import NewGameForm from './NewGameForm'
import UpdateGameForm from './UpdateGameForm'

function GameContainer() {
    const baseUrl = 'http://localhost:9292/games'

    const initialEditForm = {
        // populate with empty cells instead
        id: '',
        game_start: '',
        game_end: '',
        capacity: '',
        gym_id: ''
    }

    const [gamesArray, setGamesArray] = useState([]);
    const [editGame, setEditGame] = useState(initialEditForm)

    

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then((data) => setGamesArray(data))
    }, [])

    // CREATE game
    const addGame = newGame => {
        console.log (newGame)
        setGamesArray([...gamesArray, newGame])
    }

    // DELETE game
    function handleDelete(id) {
        fetch(`http://localhost:9292/games/${id}`, {method: 'DELETE'})
        setGamesArray(gamesArray.filter(game => game.id !== id))
    }


    // EDIT/PATCH game
    function onEditFormSubmit(gameObj) {
        fetch(`http://localhost:9292/games/${gameObj.id}`,{
            method: 'PATCH',
            body: JSON.stringify(gameObj),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            const updatedGames = gamesArray.map(game => game.id == data.id ? data : game)
            setGamesArray(updatedGames)
            })
    }

    function onEditClick(gameObj) {
        setEditGame(gameObj)
    //     setEditGame(gamesArray.find(game => game.id == gameObj.id))
    }

    return (
        <div>
            <GameList gamesArray={gamesArray} onDelete={handleDelete} onEditClick={onEditClick}/>
            <NewGameForm onSubmitGame={addGame}/>
            <UpdateGameForm editGame={editGame} setEditGame={setEditGame} onEditFormSubmit={onEditFormSubmit}/>
        </div>
    )
}


export default GameContainer;
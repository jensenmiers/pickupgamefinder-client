import React, {useEffect, useState} from "react"
import GymList from './GymList'
import NewGymForm from './NewGymForm'

function GymContainer() {
    const baseUrl = 'http://localhost:9292/gyms'

    const [gymsArray, setGymsArray] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then((data) => setGymsArray(data))
    }, [])

    const addGym = newGym => {
        setGymsArray([...gymsArray, newGym])
    }

    return (
        <div>
            <GymList gymsArray={gymsArray} />
            <NewGymForm onSubmitGym={addGym}/>
        </div>
    )
}


export default GymContainer;
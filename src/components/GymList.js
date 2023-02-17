import React from 'react'
import GymItem from './GymItem'

function GymList({gymsArray}) {

    const gyms = gymsArray.map(gym => <GymItem key={gym.id} {...gym}/>)

    return(
        <div>
            <br/>
            <h2>Gyms</h2>
            {gyms}
        </div>
    )
}





export default GymList
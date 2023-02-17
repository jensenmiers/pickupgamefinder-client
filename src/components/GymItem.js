import React from 'react'

function GymItem ( {gym_name, address, gym_phone_number, open_gym_hours} ) {
    return(
        <div>
            
            Name: {gym_name} <br/>
            Address: {address} <br/>
            Phone Number: {gym_phone_number} <br/>
            Open Gym Hours: {open_gym_hours} <br/> <br/>
        </div>

    )
}
export default GymItem
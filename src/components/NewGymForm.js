import React, {useState} from "react";

const defaultInputs = {
    gym_name: '',
    address: '',
    gym_phone_number: '',
    open_gym_hours: ''
}

function NewGymForm({ onSubmitGym }) {

    const [formInputs, setFormInputs] = useState(defaultInputs)

    const handleChange = e => {
        setFormInputs({...formInputs, [e.target.name]: e.target.value})
    }

    const postGym = () => {
        const config = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formInputs,
          })
        }
        return fetch('http://localhost:9292/gyms', config)
            .then(response => response.json())
    }

    const handleSubmit = e => {
        e.preventDefault()
        postGym()
         .then(onSubmitGym)
        setFormInputs(defaultInputs)
      }

    const { gym_name, address, gym_phone_number, open_gym_hours} = formInputs


    return(
    <div>
      <h3>Create a new Gym Profile</h3>
      <form onSubmit={handleSubmit}>
        <input value={gym_name} onChange={handleChange} type="text" name="gym_name" placeholder="Gym Name" />
        <input value={address} onChange={handleChange} type="text" name="address" placeholder="Address" />
        <input value={gym_phone_number} onChange={handleChange} type="number" name="gym_phone_number" placeholder="Phone Number" />
        <input value={open_gym_hours} onChange={handleChange} type="text" name="open_gym_hours" placeholder="Open Gym Hours" />
        <button type="submit">Add a new gym</button>
      </form>
    </div>
    )
}

export default NewGymForm;
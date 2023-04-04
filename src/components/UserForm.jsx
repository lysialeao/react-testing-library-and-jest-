import React, { useState } from "react"

const UserForm = ({ onUserAdd }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    onUserAdd({ name, email})

    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type='submit'>Add user</button>
    </form>
  )
}

export default UserForm
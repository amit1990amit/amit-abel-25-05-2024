import React, { useState } from "react"

const Login = ( props ) => {
  const { handleLogin } = props
  const [clientName, setClientName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(clientName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Please Login</p>
      <div>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Enter</button>
      </div>
    </form>
  )
}

export default Login
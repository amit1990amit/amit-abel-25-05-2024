import React, { useState } from "react"
import { useSelector } from "react-redux"

const Login = ( props ) => {
  const { handleLogin } = props
  const isLoggedIn = useSelector(state => state.client.isLoggedIn)
  const [clientName, setClientName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(clientName)
  }

  return !isLoggedIn ?(
    <form className="login-form" onSubmit={handleSubmit}>
      <p>Please Login</p>
      <div className="input-container">
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Enter</button>
      </div>
    </form>
  ) : (
    <></>
  )
}

export default React.memo(Login)
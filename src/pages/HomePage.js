import React from "react"
import Login from '../component/Login'
import simulateConnection from '../mediator-service/WebSocketHandler'

const HomePage = props => {

  const handleLogin = (name) => {
    console.log(`login client: ${name}`)
    simulateConnection(name)
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  )
}

export default HomePage
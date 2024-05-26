import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Loader from '../component/Loader'
import { setClient } from '../store/actions'
import Login from '../component/Login'
import ErrorMessage from '../component/ErrorMessage'
import GameContainer from '../component/GameContainer'
import simulateConnection from '../mediator-service/WebSocketHandler'
import useWebSocketHandlers from '../hooks/useWebSocketHandlers'

const HomePage = (props) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useWebSocketHandlers(dispatch, setIsLoading)

  const handleLogin = useCallback((name) => {
    setIsLoading(true)
    dispatch(setClient(name))
    simulateConnection(name)
  }, [dispatch])

  return (
    <div>
      <Login handleLogin={handleLogin} />
      {isLoading && <Loader />}
      <ErrorMessage />
      {!isLoading && <GameContainer />}
    </div>
  )
}

export default HomePage

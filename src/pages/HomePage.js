import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import Login from '../component/Login'
import Score from '../component/Score'
import ErrorMessage from '../component/ErrorMessage'
import simulateConnection from '../mediator-service/WebSocketHandler'
import {
  setClient,
  setScore,
  setLoginError,
} from '../store/actions'


const HomePage = props => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const handleScoreUpdate = (event) => {
      const score  = event.detail
      dispatch(setScore(score))
    }

    const handleError = (event) => {
      dispatch(setLoginError(event.detail.error))
    }

    window.addEventListener('score-update', handleScoreUpdate);
    window.addEventListener('error', handleError)
    
    return () => {
      window.removeEventListener('score-update', handleScoreUpdate)
      window.removeEventListener('error', handleError)
    }
  }, [])
  
  const handleLogin = (name) => {
    dispatch(setClient(name))
    simulateConnection(name)
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
      <ErrorMessage/>
      <Score />
    </div>
  )
}

export default HomePage
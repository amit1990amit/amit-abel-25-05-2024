import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Login from '../component/Login'
import Score from '../component/Score'
import ErrorMessage from '../component/ErrorMessage'
import Loader from "../component/Loader"
import simulateConnection from '../mediator-service/WebSocketHandler'
import {
  setClient,
  setScore,
  setLoginError,
} from '../store/actions'
import {
  SCORE_UPDATE,
  ERROR,
} from '../consts'


const HomePage = props => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.client.isLoggedIn)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const handleScoreUpdate = (event) => {
      const score  = event.detail
      dispatch(setScore(score))
      setIsLoading(false)
    }

    const handleError = (event) => {
      dispatch(setLoginError(event.detail.error))
      setIsLoading(false)
    }

    window.addEventListener(SCORE_UPDATE, handleScoreUpdate);
    window.addEventListener(ERROR, handleError)
    
    return () => {
      window.removeEventListener(SCORE_UPDATE, handleScoreUpdate)
      window.removeEventListener(ERROR, handleError)
    }
  }, [dispatch])
  
  const handleLogin = (name) => {
    setIsLoading(true)
    dispatch(setClient(name))
    simulateConnection(name)
  }

  return (
    <div>
      {!isLoggedIn && <Login handleLogin={handleLogin} />}
      {isLoading && <Loader />}
      <ErrorMessage/>
      {isLoggedIn && !isLoading  && <Score />}
    </div>
  )
}

export default HomePage
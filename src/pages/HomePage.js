import React, { useEffect, useState } from "react"
import Login from '../component/Login'
import Score from '../component/Score'
import simulateConnection from '../mediator-service/WebSocketHandler'


const HomePage = props => {
  const [currentScore, setCurrentScore] = useState(null)
  const [prevScore, setPrevScore] = useState(null)
  const handleLogin = (name) => {
    console.log(`login client: ${name}`)
    simulateConnection(name)
  }

  useEffect(() => {
    const handleScoreUpdate = (event) => {
      const score  = event.detail
      setPrevScore(currentScore)
      setCurrentScore(score)

    }
    window.addEventListener('score-update', handleScoreUpdate);

    return () => {
      window.removeEventListener('score-update', handleScoreUpdate);
    }
  }, [])

  return (
    <div>
      <Login handleLogin={handleLogin} />
      {currentScore && <Score currentScore={currentScore} prevScore={prevScore}/>}
    </div>
  )
}

export default HomePage
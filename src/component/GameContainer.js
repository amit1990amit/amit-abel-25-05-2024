import React from 'react'
import { useSelector } from "react-redux"
import Score from './Score'


const GameContainer = () => {
  const isLoggedIn = useSelector(state => state.client.isLoggedIn)
  return isLoggedIn ? (
    <div className="game-container">
      <Score />
      <div className="game-title-container">
        <p>MY GAME</p>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default React.memo(GameContainer)

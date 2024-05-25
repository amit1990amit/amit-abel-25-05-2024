import React from 'react'
import { useSelector } from 'react-redux'

const Score = props => {
  const currentScore = useSelector(state => state.score.score)
  const prevScore = useSelector(state => state.score.prevScore)
  const scoreColor = currentScore > prevScore ? 'green' : 'red'
  return (
    <div style={{ color: scoreColor }}>
      Current Score: {currentScore}
    </div>
  )
}

export default Score
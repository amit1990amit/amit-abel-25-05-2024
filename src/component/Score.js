import React from 'react'
import { useSelector } from 'react-redux'

const Score = props => {
  const currentScore = useSelector(state => state.score.score)
  const prevScore = useSelector(state => state.score.prevScore)
  const scoreColor = currentScore > prevScore ? 'green' : 'red'

  return (
    <div className={`score-container ${scoreColor}`}>
      Current Score: {currentScore}
    </div>
  )
}

export default React.memo(Score)
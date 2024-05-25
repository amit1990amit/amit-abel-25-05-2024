import React from 'react';

const Score = ((props) => {
  const { currentScore, prevScore } = props
  const scoreColor = currentScore > prevScore ? 'green' : 'red'
  return (
    <div style={{ color: scoreColor }}>
      Current Score: {currentScore}
    </div>
  );
});

export default Score
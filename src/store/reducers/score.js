import { SET_SCORE } from '../actions/score'

const initialState = {
  score: null,
  prevScore: null,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        prevScore: state.score,
        score: action.score,
      }
    default:
      return state
  }
};

export default scoreReducer

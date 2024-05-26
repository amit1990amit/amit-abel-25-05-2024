import { useEffect } from "react"
import { setScore, setLoginError } from "../store/actions"
import { SCORE_UPDATE, ERROR } from "../consts"

const useWebSocketHandlers = (dispatch, setIsLoading) => {
  useEffect(() => {
    const handleScoreUpdate = (event) => {
      const score = event.detail
      dispatch(setScore(score))
      setIsLoading(false)
    }

    const handleError = (event) => {
      dispatch(setLoginError(event.detail.error))
      setIsLoading(false)
    }

    window.addEventListener(SCORE_UPDATE, handleScoreUpdate)
    window.addEventListener(ERROR, handleError)

    return () => {
      window.removeEventListener(SCORE_UPDATE, handleScoreUpdate)
      window.removeEventListener(ERROR, handleError)
    }
  }, [dispatch, setIsLoading])
}

export default useWebSocketHandlers

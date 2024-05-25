import React from 'react'
import { useSelector } from 'react-redux'

const ErrorMessage = props => {
  const loginError = useSelector(state => state.client.loginError)
  return (
    <p className="error-message"> {loginError} </p>
  )
}
export default React.memo(ErrorMessage)
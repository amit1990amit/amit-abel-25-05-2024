export const SET_CLIENT = 'SET_CLIENT'
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'

export const setClient = (clientName) => ({
  type: SET_CLIENT,
  clientName: clientName,
})

export const setLoginError = (error) => {
  return {
  type: SET_LOGIN_ERROR,
  error: error,
  }
}

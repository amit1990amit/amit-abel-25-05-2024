import * as actionTypes from '../actions/client'

const initialState = {
    clientName: null,
    loginError: null,
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLIENT:
            return{
                ...state,
                clientName: action.clientName, 
                loginError: null,
            }
        case actionTypes.SET_LOGIN_ERROR:
            return{
                ...state,
                loginError: action.error, 
            }
        default:
            return state
        }
}

export default clientReducer
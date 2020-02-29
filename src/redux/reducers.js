import { combineReducers } from 'redux'

const user = (state = null) => state

const business = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const business = [ ...state ]
            business.splice(action.value, 1)
            return business
        default:
            return state
    }
}

export default combineReducers({ user, business })
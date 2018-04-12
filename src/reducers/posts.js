import { POST_LIST_LOADED, POST_LIST_UNLOADED } from '../actions'

const INITIAL_STATE = { all: [], selectedPost: null }

export default function posts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case POST_LIST_LOADED:
           return {
               ...state,
               all: action.payload ? action.payload : []
           }
        case POST_LIST_UNLOADED:
           return {
               ...state,
               all: []
           }
        default:
            return state
    }
}
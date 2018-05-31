import { UCITAJ_POSTOVE, UCITAJ_KATEGORIJE, LOG_IN } from "../actions/types";

const initialState = {
    postovi:[],
    kategorije:[],
    user: {},
    isUser: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {...state, user: action.payload, isUser: true}
        case UCITAJ_POSTOVE:
            return {...state, postovi: [...action.payload]}
        case UCITAJ_KATEGORIJE:
            return {...state, kategorije: [...action.payload]}
        default: 
            return state;
    }
}
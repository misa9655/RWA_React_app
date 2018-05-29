import { UCITAJ_POSTOVE, UCITAJ_KATEGORIJE } from "../actions/types";


export default (state = {postovi:[], kategorije:[]}, action) => {
    switch(action.type) {
        case UCITAJ_POSTOVE:
            return {...state, postovi: [...action.payload]}
        case UCITAJ_KATEGORIJE:
            return {...state, kategorije: [...action.payload]}
        default: 
            return state;
    }
}
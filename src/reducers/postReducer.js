import { UCITAJ_KATEGORIJE, UCITAJ_POSTOVE, UCITAJ_KORISNIKE } from "../actions/types";


export default (state = {korisnici:[], kategorije:[], postovi:[]}, action) => {
    switch(action.type) {
        case UCITAJ_KORISNIKE:
            return {...state, korisnici:[...state.korisnici, ...action.payload]};
        case UCITAJ_KATEGORIJE: 
            return {...state, kategorije: [...state.kategorije, ...action.payload]};
        case UCITAJ_POSTOVE:
            return {...state, postovi: [...state.postovi, ...action.payload]}
        default: 
            return state;
    }
}
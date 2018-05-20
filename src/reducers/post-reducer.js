import { DODAJ_KATEGORIJU } from '../actions/types'


export default (state = {kategorije: []}, action) => {
    switch(action.type) {
        case DODAJ_KATEGORIJU:
            return {...state, kategorije: [...state.kategorije, action.payload]};
        default:
            return state;
    }
}